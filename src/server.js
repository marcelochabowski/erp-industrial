import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  alerts,
  auditTrail,
  company,
  finance,
  fiscal,
  hr,
  inventory,
  it,
  kpis,
  logistics,
  maintenance,
  modules,
  production,
  projects,
  purchasing,
  quality,
  sales
} from "./data/erpData.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const port = process.env.PORT || 3000;
const publicDir = path.join(__dirname, "..", "public");

const modulePayloads = {
  logistics,
  finance,
  hr,
  production,
  inventory,
  maintenance,
  it,
  purchasing,
  sales,
  quality,
  fiscal,
  projects
};

const contentTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".webmanifest": "application/manifest+json; charset=utf-8",
  ".svg": "image/svg+xml; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".ico": "image/x-icon"
};

const securityHeaders = {
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Permissions-Policy": "geolocation=(), microphone=(), camera=()",
  "Content-Security-Policy":
    "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; connect-src 'self'; manifest-src 'self'; worker-src 'self'"
};

const send = (res, statusCode, body, headers = {}) => {
  res.writeHead(statusCode, {
    ...securityHeaders,
    ...headers
  });
  res.end(body);
};

const sendJson = (res, statusCode, payload) => {
  send(res, statusCode, JSON.stringify(payload), {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store"
  });
};

const readJsonBody = async (req) =>
  new Promise((resolve, reject) => {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;

      if (body.length > 1_000_000) {
        req.destroy();
        reject(new Error("Payload muito grande."));
      }
    });

    req.on("end", () => {
      if (!body) {
        resolve({});
        return;
      }

      try {
        resolve(JSON.parse(body));
      } catch (error) {
        reject(error);
      }
    });

    req.on("error", reject);
  });

const handleApi = async (req, res, pathname) => {
  if (req.method === "GET" && pathname === "/api/health") {
    sendJson(res, 200, {
      ok: true,
      service: "ERP Industrial API",
      version: "1.0.0",
      timestamp: new Date().toISOString()
    });
    return true;
  }

  if (req.method === "GET" && pathname === "/api/summary") {
    sendJson(res, 200, {
      company,
      modules,
      kpis,
      alerts,
      auditTrail
    });
    return true;
  }

  if (req.method === "GET" && pathname === "/api/modules") {
    sendJson(res, 200, modules);
    return true;
  }

  const moduleMatch = pathname.match(/^\/api\/modules\/([^/]+)$/);
  if (req.method === "GET" && moduleMatch) {
    const payload = modulePayloads[moduleMatch[1]];

    if (!payload) {
      sendJson(res, 404, {
        error: "MODULE_NOT_FOUND",
        message: "Módulo não encontrado."
      });
      return true;
    }

    sendJson(res, 200, payload);
    return true;
  }

  if (req.method === "POST" && pathname === "/api/modules/logistics/shipments") {
    const { customer, destination, carrier, volume } = await readJsonBody(req);

    if (!customer || !destination || !carrier || !volume) {
      sendJson(res, 400, {
        error: "VALIDATION_ERROR",
        message: "Informe cliente, destino, transportadora e volume."
      });
      return true;
    }

    const shipment = {
      id: `EXP-${Math.floor(25000 + Math.random() * 8999)}`,
      customer,
      destination,
      carrier,
      volume,
      status: "Programado",
      eta: "A confirmar",
      sla: 100
    };

    logistics.shipments.unshift(shipment);
    sendJson(res, 201, shipment);
    return true;
  }

  if (req.method === "POST" && pathname === "/api/modules/maintenance/work-orders") {
    const { asset, priority, technician } = await readJsonBody(req);

    if (!asset || !priority) {
      sendJson(res, 400, {
        error: "VALIDATION_ERROR",
        message: "Informe ativo e prioridade da ordem de serviço."
      });
      return true;
    }

    const workOrder = {
      id: `OS-${Math.floor(5000 + Math.random() * 3999)}`,
      asset,
      priority,
      status: "Aberta",
      mttr: "-",
      technician: technician || "A definir"
    };

    maintenance.workOrders.unshift(workOrder);
    sendJson(res, 201, workOrder);
    return true;
  }

  if (pathname.startsWith("/api/")) {
    sendJson(res, 404, {
      error: "NOT_FOUND",
      message: "Endpoint não encontrado."
    });
    return true;
  }

  return false;
};

const serveStatic = async (res, pathname) => {
  const requestedPath = pathname === "/" ? "/index.html" : pathname;
  const normalized = path.normalize(decodeURIComponent(requestedPath)).replace(/^(\.\.[/\\])+/, "");
  const filePath = path.join(publicDir, normalized);
  const relativePath = path.relative(publicDir, filePath);

  if (relativePath.startsWith("..") || path.isAbsolute(relativePath)) {
    send(res, 403, "Forbidden", { "Content-Type": "text/plain; charset=utf-8" });
    return;
  }

  try {
    const fileStat = await stat(filePath);

    if (!fileStat.isFile()) {
      throw new Error("Not a file");
    }

    const ext = path.extname(filePath);
    const body = await readFile(filePath);
    send(res, 200, body, {
      "Content-Type": contentTypes[ext] || "application/octet-stream",
      "Cache-Control": ext === ".html" ? "no-store" : "public, max-age=3600"
    });
  } catch {
    const fallback = await readFile(path.join(publicDir, "index.html"));
    send(res, 200, fallback, {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "no-store"
    });
  }
};

const server = createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);

  try {
    const handledApi = await handleApi(req, res, url.pathname);

    if (!handledApi) {
      await serveStatic(res, url.pathname);
    }
  } catch (error) {
    sendJson(res, 500, {
      error: "INTERNAL_ERROR",
      message: error.message
    });
  }
});

server.listen(port, () => {
  console.log(`ERP Industrial rodando em http://localhost:${port}`);
});
