import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  admin,
  ai,
  alerts,
  automation,
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
  projects,
  admin,
  automation,
  ai
};

const moduleOperations = {
  logistics: {
    collection: "shipments",
    idPrefix: "EXP",
    required: ["customer", "destination", "carrier", "volume"],
    defaults: { status: "Programado", eta: "A confirmar", sla: 100 }
  },
  finance: {
    collection: "receivables",
    idPrefix: "REC",
    required: ["customer", "due", "amount"],
    defaults: { status: "No prazo" }
  },
  hr: {
    collection: "employees",
    idPrefix: "COL",
    required: ["name", "role", "shift"],
    defaults: { status: "Ativo" }
  },
  production: {
    collection: "orders",
    idPrefix: "OP",
    required: ["item", "line", "planned"],
    defaults: { produced: 0, status: "Planejamento", oee: 0 }
  },
  inventory: {
    collection: "materials",
    idKey: "sku",
    idPrefix: "MAT",
    required: ["name", "balance", "min", "location"],
    defaults: { status: "Normal" }
  },
  maintenance: {
    collection: "workOrders",
    idPrefix: "OS",
    required: ["asset", "priority"],
    defaults: { status: "Aberta", mttr: "-", technician: "A definir" }
  },
  it: {
    collection: "tickets",
    idPrefix: "TI",
    required: ["requester", "category", "priority"],
    defaults: { status: "Aberto", sla: 100 }
  },
  purchasing: {
    collection: "requisitions",
    idPrefix: "REQ",
    required: ["item", "requester", "amount"],
    defaults: { status: "Cotação" }
  },
  sales: {
    collection: "opportunities",
    idPrefix: "OPV",
    required: ["customer", "stage", "amount", "probability"]
  },
  quality: {
    collection: "nonConformities",
    idPrefix: "NC",
    required: ["origin", "severity", "owner"],
    defaults: { status: "Análise" }
  },
  fiscal: {
    collection: "invoices",
    idPrefix: "NF",
    required: ["partner", "type", "amount"],
    defaults: { status: "Aguardando SEFAZ" }
  },
  projects: {
    collection: "portfolio",
    idPrefix: "PRJ",
    required: ["name", "phase", "budget", "progress"]
  },
  admin: {
    collection: "users",
    idPrefix: "USR",
    required: ["name", "email", "role", "unit"],
    defaults: { status: "Ativo", mfa: "Pendente" }
  },
  automation: {
    collection: "plcs",
    idPrefix: "PLC",
    required: ["name", "line", "protocol", "ip"],
    defaults: { status: "Conectado", latency: 12, safety: "OK" }
  },
  ai: {
    collection: "requests",
    idPrefix: "IA",
    required: ["requester", "scope", "question", "answer"],
    defaults: { status: "Respondido", confidence: 86 }
  }
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

const generateRecordId = (prefix) => `${prefix}-${Math.floor(10000 + Math.random() * 89999)}`;

const getOperation = (moduleId, collection) => {
  const operation = moduleOperations[moduleId];

  if (!operation || operation.collection !== collection) {
    return null;
  }

  return operation;
};

const validatePayload = (operation, payload) =>
  operation.required.filter((field) => payload[field] === undefined || String(payload[field]).trim() === "");

const createRecord = (operation, payload) => {
  const idKey = operation.idKey || "id";

  return {
    [idKey]: payload[idKey] || generateRecordId(operation.idPrefix),
    ...(operation.defaults || {}),
    ...payload
  };
};

const handleApi = async (req, res, pathname) => {
  if (req.method === "GET" && pathname === "/api/health") {
    sendJson(res, 200, {
      ok: true,
      service: "ERP Industrial API",
      version: "1.2.0",
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

  const collectionMatch = pathname.match(/^\/api\/modules\/([^/]+)\/([^/]+)(?:\/([^/]+))?$/);
  if (req.method === "POST" && collectionMatch && !collectionMatch[3]) {
    const [, moduleId, collection] = collectionMatch;
    const operation = getOperation(moduleId, collection);
    const moduleData = modulePayloads[moduleId];

    if (!operation || !moduleData?.[collection]) {
      sendJson(res, 404, {
        error: "COLLECTION_NOT_FOUND",
        message: "Coleção do módulo não encontrada."
      });
      return true;
    }

    const payload = await readJsonBody(req);
    const missingFields = validatePayload(operation, payload);

    if (missingFields.length) {
      sendJson(res, 400, {
        error: "VALIDATION_ERROR",
        message: `Informe os campos obrigatórios: ${missingFields.join(", ")}.`
      });
      return true;
    }

    const record = createRecord(operation, payload);
    moduleData[collection].unshift(record);
    sendJson(res, 201, record);
    return true;
  }

  if (req.method === "PATCH" && collectionMatch && collectionMatch[3]) {
    const [, moduleId, collection, recordId] = collectionMatch;
    const operation = getOperation(moduleId, collection);
    const moduleData = modulePayloads[moduleId];

    if (!operation || !moduleData?.[collection]) {
      sendJson(res, 404, {
        error: "COLLECTION_NOT_FOUND",
        message: "Coleção do módulo não encontrada."
      });
      return true;
    }

    const idKey = operation.idKey || "id";
    const record = moduleData[collection].find((item) => String(item[idKey]) === decodeURIComponent(recordId));

    if (!record) {
      sendJson(res, 404, {
        error: "RECORD_NOT_FOUND",
        message: "Registro não encontrado."
      });
      return true;
    }

    const payload = await readJsonBody(req);
    delete payload[idKey];
    Object.assign(record, payload);
    sendJson(res, 200, record);
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
