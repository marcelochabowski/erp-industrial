const icons = {
  truck: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M10 17h4V5H2v12h3"/><path d="M14 8h4l4 4v5h-3"/><circle cx="7.5" cy="17.5" r="2.5"/><circle cx="16.5" cy="17.5" r="2.5"/></svg>`,
  wallet: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M19 7V6a2 2 0 0 0-2-2H5a3 3 0 0 0 0 6h15v9H5a3 3 0 0 1-3-3V7"/><path d="M16 14h.01"/></svg>`,
  users: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  factory: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M2 20h20"/><path d="M4 20V9l5 3V9l5 3V4h4v16"/><path d="M17 8h1"/><path d="M8 17h1"/><path d="M13 17h1"/></svg>`,
  boxes: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>`,
  wrench: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M14.7 6.3a4 4 0 0 0-5 5L3 18v3h3l6.7-6.7a4 4 0 0 0 5-5l-2.4 2.4-3-3Z"/></svg>`,
  server: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="4" width="18" height="7" rx="2"/><rect x="3" y="13" width="18" height="7" rx="2"/><path d="M7 8h.01"/><path d="M7 17h.01"/></svg>`,
  cart: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h8.78a2 2 0 0 0 1.95-1.57L21 7H5.12"/></svg>`,
  handshake: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="m11 17 2 2a2.8 2.8 0 0 0 4 0l3-3a2.8 2.8 0 0 0 0-4l-5-5a2.8 2.8 0 0 0-4 0l-1 1"/><path d="m13 7 4 4"/><path d="m8 11 2-2a2.8 2.8 0 0 1 4 0l1 1"/><path d="m2 14 4 4"/><path d="m6 18 4-4"/></svg>`,
  shield: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.7a1.2 1.2 0 0 1 1.52 0C14.5 3.8 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>`,
  file: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M8 13h8"/><path d="M8 17h6"/></svg>`,
  kanban: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M9 4v16"/><path d="M15 4v16"/><path d="M6 8h.01"/><path d="M12 12h.01"/><path d="M18 9h.01"/></svg>`
};

const state = {
  summary: null,
  activeModule: "logistics",
  moduleData: {},
  filter: ""
};

const moduleSignals = {
  logistics: { value: "94,6%", label: "SLA de entrega", risk: "1 NF pendente" },
  finance: { value: "R$ 1,84 mi", label: "Caixa 30 dias", risk: "1 título atrasado" },
  hr: { value: "306", label: "Colaboradores", risk: "9 reciclagens" },
  production: { value: "82,4%", label: "OEE médio", risk: "1 linha parada" },
  inventory: { value: "4,8 t", label: "Material crítico", risk: "2 itens atenção" },
  maintenance: { value: "2h 40m", label: "MTTR crítico", risk: "1 OS alta" },
  it: { value: "91,8%", label: "SLA de TI", risk: "8 chamados críticos" },
  purchasing: { value: "R$ 639 mil", label: "Requisições", risk: "2 aprovações" },
  sales: { value: "R$ 2,5 mi", label: "Pipeline", risk: "1 crédito pendente" },
  quality: { value: "1,7%", label: "Reprovação", risk: "1 lote bloqueado" },
  fiscal: { value: "R$ 4,5 mi", label: "Base fiscal", risk: "1 SEFAZ pendente" },
  projects: { value: "58%", label: "CAPEX médio", risk: "1 risco alto" }
};

const processFlows = {
  logistics: ["Separação", "Conferência", "NF", "Expedição", "Entrega"],
  finance: ["Previsão", "Aprovação", "Liquidação", "Conciliação", "Fechamento"],
  hr: ["Escala", "Ponto", "Treinamento", "Férias", "Folha"],
  production: ["Planejamento", "Setup", "Produção", "Qualidade", "Apontamento"],
  inventory: ["MRP", "Compra", "Recebimento", "Reserva", "Baixa"],
  maintenance: ["Abertura", "Triagem", "Execução", "Teste", "Encerramento"],
  it: ["Abertura", "Classificação", "Atendimento", "Validação", "Fechamento"],
  purchasing: ["Requisição", "Cotação", "Aprovação", "Pedido", "Recebimento"],
  sales: ["Lead", "Proposta", "Negociação", "Pedido", "Pós-venda"],
  quality: ["Inspeção", "NC", "Disposição", "Ação", "Eficácia"],
  fiscal: ["Documento", "Escrituração", "Apuração", "Obrigação", "Fechamento"],
  projects: ["Ideia", "Business case", "Execução", "Go-live", "Benefícios"]
};

const moneyFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  maximumFractionDigits: 0
});

const numberFormatter = new Intl.NumberFormat("pt-BR");
const qs = (selector) => document.querySelector(selector);
let demoDataPromise;

const getModule = (moduleId = state.activeModule) =>
  state.summary.modules.find((module) => module.id === moduleId);

const loadDemoData = async () => {
  if (!demoDataPromise) {
    const dataUrl = new URL("../src/data/erpData.js", window.location.href).href;
    demoDataPromise = import(dataUrl);
  }

  return demoDataPromise;
};

const demoPayload = async (endpoint) => {
  const data = await loadDemoData();
  const modulePayloads = {
    logistics: data.logistics,
    finance: data.finance,
    hr: data.hr,
    production: data.production,
    inventory: data.inventory,
    maintenance: data.maintenance,
    it: data.it,
    purchasing: data.purchasing,
    sales: data.sales,
    quality: data.quality,
    fiscal: data.fiscal,
    projects: data.projects
  };

  if (endpoint === "/api/summary") {
    return {
      company: data.company,
      modules: data.modules,
      kpis: data.kpis,
      alerts: data.alerts,
      auditTrail: data.auditTrail
    };
  }

  if (endpoint === "/api/modules") {
    return data.modules;
  }

  const moduleMatch = endpoint.match(/^\/api\/modules\/([^/]+)$/);
  if (moduleMatch) {
    return modulePayloads[moduleMatch[1]];
  }

  throw new Error(`Sem fallback para ${endpoint}`);
};

const apiGet = async (endpoint) => {
  try {
    const response = await fetch(endpoint);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.info("Usando dados locais de demonstração.", error.message);
    return demoPayload(endpoint);
  }
};

const badgeClass = (value = "") => {
  const normalized = value.toLowerCase();

  if (["crítico", "crítica", "atrasado", "alta", "parada", "bloqueado", "reprovado"].some((term) => normalized.includes(term))) {
    return "red";
  }

  if (["atenção", "aprovar", "média", "setup", "aguardando", "análise", "cotação", "mitigando"].some((term) => normalized.includes(term))) {
    return "amber";
  }

  if (["normal", "ativo", "finalizada", "operando", "no prazo", "programado", "aprovado", "apurado", "autorizada", "homologado"].some((term) => normalized.includes(term))) {
    return "green";
  }

  return "";
};

const setModuleAccent = () => {
  const module = getModule();
  document.documentElement.style.setProperty("--module-accent", module.accent);
};

const applyTableFilter = () => {
  document.querySelectorAll(".data-table tbody tr, .module-tile").forEach((row) => {
    const visible = row.textContent.toLowerCase().includes(state.filter);
    row.style.display = visible ? "" : "none";
  });
};

const createButton = (module, className = "nav-item") => {
  const button = document.createElement("button");
  const signal = moduleSignals[module.id];
  button.type = "button";
  button.className = `${className}${module.id === state.activeModule ? " active" : ""}`;
  button.style.setProperty("--module-accent", module.accent);
  button.innerHTML = `
    <span class="nav-icon">${icons[module.icon] || ""}</span>
    <span class="nav-text">
      <strong>${module.name}</strong>
      <small>${signal?.label || "Aplicativo"}</small>
    </span>
  `;
  button.addEventListener("click", () => selectModule(module.id));
  return button;
};

const renderNavigation = () => {
  const desktopNav = qs("#desktopNav");
  const drawerNav = qs("#drawerNav");
  const mobileNav = qs("#mobileNav");

  [desktopNav, drawerNav, mobileNav].forEach((node) => {
    node.innerHTML = "";
  });

  state.summary.modules.forEach((module, index) => {
    desktopNav.appendChild(createButton(module));
    drawerNav.appendChild(createButton(module));

    if (index < 5) {
      const mobileButton = createButton(module, "mobile-nav-item");
      mobileButton.title = module.name;
      mobileButton.innerHTML = `${icons[module.icon] || ""}<span>${module.name}</span>`;
      mobileNav.appendChild(mobileButton);
    }
  });
};

const renderTabs = () => {
  const tabs = qs("#moduleTabs");
  tabs.innerHTML = "";

  state.summary.modules.forEach((module) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `tab-button${module.id === state.activeModule ? " active" : ""}`;
    button.textContent = module.name;
    button.style.setProperty("--module-accent", module.accent);
    button.setAttribute("role", "tab");
    button.setAttribute("aria-selected", module.id === state.activeModule ? "true" : "false");
    button.addEventListener("click", () => selectModule(module.id));
    tabs.appendChild(button);
  });
};

const renderHeroMetrics = () => {
  const heroMetrics = qs("#heroMetrics");

  if (!heroMetrics) {
    return;
  }

  heroMetrics.innerHTML = state.summary.kpis
    .slice(0, 4)
    .map(
      (kpi) => `
        <article class="snapshot-card">
          <span>${kpi.label}</span>
          <strong>${kpi.value}</strong>
          <small>${kpi.suffix}</small>
        </article>
      `
    )
    .join("");
};

const renderModuleSelector = () => {
  const select = qs("#moduleSelect");
  const quickRow = qs("#quickModuleRow");
  const activeTitle = qs("#activeModuleTitle");
  const activeDescription = qs("#activeModuleDescription");
  const activeModule = getModule();

  if (activeTitle) {
    activeTitle.textContent = activeModule.name;
  }

  if (activeDescription) {
    activeDescription.textContent = activeModule.description;
  }

  if (select) {
    select.innerHTML = state.summary.modules
      .map((module) => `<option value="${module.id}">${module.name}</option>`)
      .join("");
    select.value = state.activeModule;
    select.onchange = (event) => selectModule(event.target.value);
  }

  if (quickRow) {
    quickRow.innerHTML = state.summary.modules
      .map(
        (module) => `
          <button class="quick-module${module.id === state.activeModule ? " active" : ""}" type="button" data-module="${module.id}" style="--module-accent: ${module.accent}">
            ${icons[module.icon] || ""}
            <span>${module.name}</span>
          </button>
        `
      )
      .join("");

    quickRow.querySelectorAll(".quick-module").forEach((button) => {
      button.addEventListener("click", () => selectModule(button.dataset.module));
    });
  }
};

const renderKpis = () => {
  qs("#kpiGrid").innerHTML = state.summary.kpis
    .map((kpi, index) => {
      const bars = [34, 58, 46, 74, 61, 82, 69].map((value, barIndex) => (value + index * 7 + barIndex * 3) % 86);
      return `
        <article class="kpi-card">
          <div class="kpi-top">
            <span>${kpi.label}</span>
            <em class="${kpi.trend === "up" ? "delta-up" : "delta-down"}">
              ${kpi.trend === "up" ? "+" : "-"}${Math.abs(kpi.delta).toLocaleString("pt-BR")}%
            </em>
          </div>
          <strong>${kpi.value}</strong>
          <div class="sparkline" aria-hidden="true">
            ${bars.map((bar) => `<i style="--h: ${Math.max(bar, 12)}%"></i>`).join("")}
          </div>
          <small>${kpi.suffix}</small>
        </article>
      `;
    })
    .join("");
};

const renderModuleTiles = () => {
  const tiles = qs("#moduleTiles");

  tiles.innerHTML = state.summary.modules
    .map((module) => {
      const signal = moduleSignals[module.id];
      return `
        <button class="module-tile${module.id === state.activeModule ? " active" : ""}" type="button" data-module="${module.id}" style="--module-accent: ${module.accent}">
          <span class="tile-icon">${icons[module.icon] || ""}</span>
          <span class="tile-body">
            <strong>${module.name}</strong>
            <small>${module.description}</small>
          </span>
          <span class="tile-metric">
            <b>${signal.value}</b>
            <small>${signal.risk}</small>
          </span>
        </button>
      `;
    })
    .join("");

  tiles.querySelectorAll(".module-tile").forEach((tile) => {
    tile.addEventListener("click", () => selectModule(tile.dataset.module));
  });

  applyTableFilter();
};

const renderAlerts = () => {
  const colors = {
    critical: "#bb0000",
    warning: "#e9730c",
    info: "#0a6ed1"
  };

  qs("#alertsList").innerHTML = state.summary.alerts
    .map(
      (alert) => `
        <article class="alert-item" style="--alert-color: ${colors[alert.severity] || colors.info}">
          <div class="alert-top">
            <strong>${alert.module}</strong>
            <span class="alert-due">${alert.due}</span>
          </div>
          <h3>${alert.title}</h3>
          <p>${alert.detail}</p>
        </article>
      `
    )
    .join("");
};

const renderActivity = () => {
  qs("#activityList").innerHTML = state.summary.auditTrail
    .map(
      (item) => `
        <article class="activity-item">
          <span class="activity-time">${item.time}</span>
          <div>
            <strong>${item.user}</strong>
            <p>${item.action}</p>
          </div>
        </article>
      `
    )
    .join("");
};

const table = (title, columns, rows) => `
  <article class="table-card ${rows.length > 3 ? "full" : ""}">
    <div class="card-toolbar">
      <h3>${title}</h3>
      <button class="ghost-action" type="button">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M3 3v18h18"></path>
          <path d="m19 9-5 5-4-4-3 3"></path>
        </svg>
        Analisar
      </button>
    </div>
    <div class="data-table-wrap">
      <table class="data-table">
        <thead>
          <tr>${columns.map((column) => `<th>${column.label}</th>`).join("")}</tr>
        </thead>
        <tbody>
          ${rows
            .map(
              (row) => `
                <tr>
                  ${columns
                    .map((column) => {
                      const rawValue = column.render ? column.render(row) : row[column.key];
                      return `<td data-label="${column.label}">${rawValue}</td>`;
                    })
                    .join("")}
                </tr>
              `
            )
            .join("")}
        </tbody>
      </table>
    </div>
  </article>
`;

const progressCard = (title, rows, labelKey, valueKey, suffix = "%") => `
  <article class="mini-card">
    <div class="card-toolbar">
      <h3>${title}</h3>
      <span class="mini-chip">Tempo real</span>
    </div>
    <div class="progress-row">
      ${rows
        .map(
          (row) => `
            <div class="progress-item">
              <div class="progress-label">
                <span>${row[labelKey]}</span>
                <strong>${row[valueKey]}${suffix}</strong>
              </div>
              <div class="progress-track">
                <div class="progress-fill" style="--progress: ${Math.min(Number(row[valueKey]) || 0, 100)}%"></div>
              </div>
            </div>
          `
        )
        .join("")}
    </div>
  </article>
`;

const renderFacts = (data) => {
  const builders = {
    logistics: () => [
      ["Expedições", data.shipments.length],
      ["Docas em uso", data.docks.filter((dock) => dock.status !== "Livre").length],
      ["SLA médio", `${Math.round(data.shipments.reduce((sum, item) => sum + item.sla, 0) / data.shipments.length)}%`]
    ],
    finance: () => [
      ["Receber", moneyFormatter.format(data.receivables.reduce((sum, item) => sum + item.amount, 0))],
      ["Pagar", moneyFormatter.format(data.payables.reduce((sum, item) => sum + item.amount, 0))],
      ["Atrasos", data.receivables.filter((item) => item.status === "Atrasado").length]
    ],
    hr: () => [
      ["Headcount", numberFormatter.format(data.headcount.reduce((sum, item) => sum + item.employees, 0))],
      ["Ausências", numberFormatter.format(data.headcount.reduce((sum, item) => sum + item.absences, 0))],
      ["Treinamentos", data.trainings.length]
    ],
    production: () => [
      ["OPs", data.orders.length],
      ["Produzido", numberFormatter.format(data.orders.reduce((sum, item) => sum + item.produced, 0))],
      ["Linhas ativas", data.lineStatus.filter((line) => line.status === "Operando").length]
    ],
    inventory: () => [
      ["Materiais", data.materials.length],
      ["Críticos", data.materials.filter((item) => item.status !== "Normal").length],
      ["Movimentos", data.movements.length]
    ],
    maintenance: () => [
      ["Ordens", data.workOrders.length],
      ["Alta prioridade", data.workOrders.filter((item) => item.priority === "Alta").length],
      ["Ativos", data.assets.length]
    ],
    it: () => [
      ["Chamados", data.tickets.length],
      ["SLA médio", `${Math.round(data.tickets.reduce((sum, item) => sum + item.sla, 0) / data.tickets.length)}%`],
      ["Sistemas", data.systems.length]
    ],
    purchasing: () => [
      ["Requisições", data.requisitions.length],
      ["Valor aberto", moneyFormatter.format(data.requisitions.reduce((sum, item) => sum + item.amount, 0))],
      ["Fornecedores", data.suppliers.length]
    ],
    sales: () => [
      ["Pipeline", moneyFormatter.format(data.opportunities.reduce((sum, item) => sum + item.amount, 0))],
      ["Pedidos", data.orders.length],
      ["Chance média", `${Math.round(data.opportunities.reduce((sum, item) => sum + item.probability, 0) / data.opportunities.length)}%`]
    ],
    quality: () => [
      ["Inspeções", data.inspections.length],
      ["NCs abertas", data.nonConformities.length],
      ["Compliance", `${Math.round(data.certifications.reduce((sum, item) => sum + item.compliance, 0) / data.certifications.length)}%`]
    ],
    fiscal: () => [
      ["Notas", data.invoices.length],
      ["Base impostos", moneyFormatter.format(data.taxes.reduce((sum, item) => sum + item.base, 0))],
      ["Centros custo", data.costCenters.length]
    ],
    projects: () => [
      ["Projetos", data.portfolio.length],
      ["CAPEX", moneyFormatter.format(data.portfolio.reduce((sum, item) => sum + item.budget, 0))],
      ["Riscos", data.risks.length]
    ]
  };

  return builders[state.activeModule]().map(([label, value]) => ({ label, value }));
};

const processFlow = () => `
  <section class="process-flow" aria-label="Fluxo de processo">
    ${processFlows[state.activeModule]
      .map(
        (step, index) => `
          <div class="flow-step${index < 3 ? " done" : ""}${index === 3 ? " current" : ""}">
            <span>${index + 1}</span>
            <strong>${step}</strong>
          </div>
        `
      )
      .join("")}
  </section>
`;

const renderLogistics = (data) => `
  <div class="module-grid">
    ${table("Expedições", [
      { label: "Pedido", key: "id" },
      { label: "Cliente", key: "customer" },
      { label: "Destino", key: "destination" },
      { label: "Status", render: (row) => `<span class="badge ${badgeClass(row.status)}">${row.status}</span>` },
      { label: "ETA", key: "eta" }
    ], data.shipments)}
    ${progressCard("Docas", data.docks, "id", "progress")}
  </div>
`;

const renderFinance = (data) => `
  <div class="module-grid">
    <article class="mini-card">
      <div class="card-toolbar">
        <h3>Fluxo de caixa projetado</h3>
        <span class="mini-chip">6 meses</span>
      </div>
      <div class="cash-chart">
        ${data.cashFlow
          .map((item) => {
            const margin = item.income - item.expense;
            const percent = Math.round((margin / item.income) * 100);
            return `
              <div class="cash-bar">
                <span style="--h: ${Math.max(percent * 3, 12)}%"></span>
                <small>${item.month}</small>
              </div>
            `;
          })
          .join("")}
      </div>
    </article>
    ${table("Contas a receber", [
      { label: "Título", key: "id" },
      { label: "Cliente", key: "customer" },
      { label: "Vencimento", key: "due" },
      { label: "Valor", render: (row) => moneyFormatter.format(row.amount) },
      { label: "Status", render: (row) => `<span class="badge ${badgeClass(row.status)}">${row.status}</span>` }
    ], data.receivables)}
    ${table("Contas a pagar", [
      { label: "Título", key: "id" },
      { label: "Fornecedor", key: "supplier" },
      { label: "Vencimento", key: "due" },
      { label: "Valor", render: (row) => moneyFormatter.format(row.amount) },
      { label: "Status", render: (row) => `<span class="badge ${badgeClass(row.status)}">${row.status}</span>` }
    ], data.payables)}
  </div>
`;

const renderHr = (data) => `
  <div class="module-grid">
    ${table("Colaboradores", [
      { label: "Matrícula", key: "id" },
      { label: "Nome", key: "name" },
      { label: "Cargo", key: "role" },
      { label: "Turno", key: "shift" },
      { label: "Status", render: (row) => `<span class="badge ${badgeClass(row.status)}">${row.status}</span>` }
    ], data.employees)}
    ${table("Headcount por área", [
      { label: "Área", key: "area" },
      { label: "Pessoas", render: (row) => numberFormatter.format(row.employees) },
      { label: "Ausências", render: (row) => numberFormatter.format(row.absences) },
      { label: "Horas extras", render: (row) => `${numberFormatter.format(row.overtime)} h` }
    ], data.headcount)}
    ${progressCard("Treinamentos", data.trainings, "name", "completion")}
  </div>
`;

const renderProduction = (data) => `
  <div class="module-grid">
    ${table("Ordens de produção", [
      { label: "OP", key: "id" },
      { label: "Item", key: "item" },
      { label: "Linha", key: "line" },
      { label: "Produzido", render: (row) => `${numberFormatter.format(row.produced)} / ${numberFormatter.format(row.planned)}` },
      { label: "Status", render: (row) => `<span class="badge ${badgeClass(row.status)}">${row.status}</span>` },
      { label: "OEE", render: (row) => `${row.oee}%` }
    ], data.orders)}
    ${progressCard("Linhas", data.lineStatus, "line", "oee")}
  </div>
`;

const renderInventory = (data) => `
  <div class="module-grid">
    ${table("Materiais", [
      { label: "SKU", key: "sku" },
      { label: "Material", key: "name" },
      { label: "Saldo", key: "balance" },
      { label: "Mínimo", key: "min" },
      { label: "Status", render: (row) => `<span class="badge ${badgeClass(row.status)}">${row.status}</span>` },
      { label: "Local", key: "location" }
    ], data.materials)}
    ${table("Movimentações", [
      { label: "Mov.", key: "id" },
      { label: "Tipo", key: "type" },
      { label: "Material", key: "material" },
      { label: "Qtd.", key: "qty" },
      { label: "Origem", key: "order" }
    ], data.movements)}
  </div>
`;

const renderMaintenance = (data) => `
  <div class="module-grid">
    ${table("Ordens de serviço", [
      { label: "OS", key: "id" },
      { label: "Ativo", key: "asset" },
      { label: "Prioridade", render: (row) => `<span class="badge ${badgeClass(row.priority)}">${row.priority}</span>` },
      { label: "Status", render: (row) => `<span class="badge ${badgeClass(row.status)}">${row.status}</span>` },
      { label: "Técnico", key: "technician" }
    ], data.workOrders)}
    ${progressCard("Disponibilidade de ativos", data.assets, "id", "availability")}
  </div>
`;

const renderIt = (data) => `
  <div class="module-grid">
    ${table("Service desk", [
      { label: "Chamado", key: "id" },
      { label: "Solicitante", key: "requester" },
      { label: "Categoria", key: "category" },
      { label: "Prioridade", render: (row) => `<span class="badge ${badgeClass(row.priority)}">${row.priority}</span>` },
      { label: "Status", render: (row) => `<span class="badge ${badgeClass(row.status)}">${row.status}</span>` },
      { label: "SLA", render: (row) => `${row.sla}%` }
    ], data.tickets)}
    ${table("Ativos de TI", [
      { label: "Ativo", key: "id" },
      { label: "Tipo", key: "type" },
      { label: "Responsável", key: "owner" },
      { label: "Saúde", render: (row) => `${row.health}%` },
      { label: "Status", render: (row) => `<span class="badge ${badgeClass(row.status)}">${row.status}</span>` }
    ], data.assets)}
    ${progressCard("Disponibilidade de sistemas", data.systems, "name", "availability")}
  </div>
`;

const renderPurchasing = (data) => `
  <div class="module-grid">
    ${table("Requisições de compra", [
      { label: "REQ", key: "id" },
      { label: "Item", key: "item" },
      { label: "Solicitante", key: "requester" },
      { label: "Valor", render: (row) => moneyFormatter.format(row.amount) },
      { label: "Status", render: (row) => `<span class="badge ${badgeClass(row.status)}">${row.status}</span>` }
    ], data.requisitions)}
    ${progressCard("Fornecedores homologados", data.suppliers, "name", "rating")}
    ${table("Lead time de fornecedores", [
      { label: "Fornecedor", key: "name" },
      { label: "Nota", render: (row) => `${row.rating}%` },
      { label: "Lead time", key: "leadTime" },
      { label: "Status", render: (row) => `<span class="badge ${badgeClass(row.status)}">${row.status}</span>` }
    ], data.suppliers)}
  </div>
`;

const renderSales = (data) => `
  <div class="module-grid">
    ${table("Oportunidades", [
      { label: "Oportunidade", key: "id" },
      { label: "Cliente", key: "customer" },
      { label: "Etapa", key: "stage" },
      { label: "Valor", render: (row) => moneyFormatter.format(row.amount) },
      { label: "Prob.", render: (row) => `${row.probability}%` }
    ], data.opportunities)}
    ${progressCard("Probabilidade por oportunidade", data.opportunities, "customer", "probability")}
    ${table("Pedidos de venda", [
      { label: "Pedido", key: "id" },
      { label: "Cliente", key: "customer" },
      { label: "Entrega", key: "delivery" },
      { label: "Valor", render: (row) => moneyFormatter.format(row.amount) },
      { label: "Status", render: (row) => `<span class="badge ${badgeClass(row.status)}">${row.status}</span>` }
    ], data.orders)}
  </div>
`;

const renderQuality = (data) => `
  <div class="module-grid">
    ${table("Inspeções", [
      { label: "Inspeção", key: "id" },
      { label: "Item", key: "item" },
      { label: "Resultado", render: (row) => `<span class="badge ${badgeClass(row.result)}">${row.result}</span>` },
      { label: "Amostra", key: "sample" },
      { label: "Inspetor", key: "inspector" }
    ], data.inspections)}
    ${table("Não conformidades", [
      { label: "NC", key: "id" },
      { label: "Origem", key: "origin" },
      { label: "Severidade", render: (row) => `<span class="badge ${badgeClass(row.severity)}">${row.severity}</span>` },
      { label: "Status", render: (row) => `<span class="badge ${badgeClass(row.status)}">${row.status}</span>` },
      { label: "Responsável", key: "owner" }
    ], data.nonConformities)}
    ${progressCard("Certificações", data.certifications, "name", "compliance")}
  </div>
`;

const renderFiscal = (data) => `
  <div class="module-grid">
    ${table("Notas fiscais", [
      { label: "NF", key: "id" },
      { label: "Parceiro", key: "partner" },
      { label: "Tipo", key: "type" },
      { label: "Valor", render: (row) => moneyFormatter.format(row.amount) },
      { label: "Status", render: (row) => `<span class="badge ${badgeClass(row.status)}">${row.status}</span>` }
    ], data.invoices)}
    ${table("Apuração de impostos", [
      { label: "Imposto", key: "name" },
      { label: "Base", render: (row) => moneyFormatter.format(row.base) },
      { label: "Vencimento", key: "due" },
      { label: "Status", render: (row) => `<span class="badge ${badgeClass(row.status)}">${row.status}</span>` }
    ], data.taxes)}
    ${progressCard("Centros de custo", data.costCenters, "name", "consumed")}
  </div>
`;

const renderProjects = (data) => `
  <div class="module-grid">
    ${table("Portfólio de projetos", [
      { label: "Projeto", key: "id" },
      { label: "Nome", key: "name" },
      { label: "Fase", key: "phase" },
      { label: "Orçamento", render: (row) => moneyFormatter.format(row.budget) },
      { label: "Progresso", render: (row) => `${row.progress}%` }
    ], data.portfolio)}
    ${progressCard("Progresso dos projetos", data.portfolio, "name", "progress")}
    ${table("Riscos", [
      { label: "Risco", key: "id" },
      { label: "Projeto", key: "project" },
      { label: "Severidade", render: (row) => `<span class="badge ${badgeClass(row.severity)}">${row.severity}</span>` },
      { label: "Status", render: (row) => `<span class="badge ${badgeClass(row.status)}">${row.status}</span>` },
      { label: "Dono", key: "owner" }
    ], data.risks)}
  </div>
`;

const moduleRenderers = {
  logistics: renderLogistics,
  finance: renderFinance,
  hr: renderHr,
  production: renderProduction,
  inventory: renderInventory,
  maintenance: renderMaintenance,
  it: renderIt,
  purchasing: renderPurchasing,
  sales: renderSales,
  quality: renderQuality,
  fiscal: renderFiscal,
  projects: renderProjects
};

const renderModule = async () => {
  setModuleAccent();
  renderNavigation();
  renderTabs();
  renderModuleSelector();
  renderModuleTiles();

  if (!state.moduleData[state.activeModule]) {
    state.moduleData[state.activeModule] = await apiGet(`/api/modules/${state.activeModule}`);
  }

  const module = getModule();
  const renderer = moduleRenderers[state.activeModule];
  const data = state.moduleData[state.activeModule];
  const facts = renderFacts(data);

  qs("#moduleView").innerHTML = `
    <section class="object-page-header">
      <div class="object-main">
        <div class="module-icon">${icons[module.icon] || ""}</div>
        <div>
          <p class="eyebrow">${module.name}</p>
          <h2>${module.description}</h2>
          <p>${moduleSignals[module.id].risk} · Atualizado às 15:55 · ${moduleSignals[module.id].label}</p>
        </div>
      </div>
      <div class="object-actions">
        <button class="secondary-action" type="button">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <path d="M7 10l5 5 5-5"></path>
            <path d="M12 15V3"></path>
          </svg>
          Exportar
        </button>
        <button class="primary-action" type="button">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
          Executar
        </button>
      </div>
      <div class="object-facts">
        ${facts
          .map(
            (fact) => `
              <span>
                <strong>${fact.value}</strong>
                <small>${fact.label}</small>
              </span>
            `
          )
          .join("")}
      </div>
    </section>
    ${processFlow()}
    ${renderer ? renderer(data) : `<div class="empty-state">Módulo em construção.</div>`}
  `;

  applyTableFilter();
};

const selectModule = async (moduleId, syncUrl = true) => {
  state.activeModule = moduleId;
  closeDrawer();
  if (syncUrl) {
    const url = new URL(window.location.href);
    url.searchParams.set("module", moduleId);
    window.history.replaceState({}, "", url);
  }
  await renderModule();
};

const closeDrawer = () => {
  qs("#mobileDrawer").hidden = true;
  qs("#drawerBackdrop").hidden = true;
};

const setupDrawer = () => {
  qs("#menuButton").addEventListener("click", () => {
    qs("#mobileDrawer").hidden = false;
    qs("#drawerBackdrop").hidden = false;
  });
  qs("#drawerBackdrop").addEventListener("click", closeDrawer);
};

const setupDialog = () => {
  const dialog = qs("#operationDialog");
  const form = qs("#operationForm");

  qs("#newActionButton").addEventListener("click", () => {
    dialog.showModal();
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const submitter = event.submitter;
    if (submitter?.value === "cancel") {
      dialog.close();
      return;
    }

    const payload = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/modules/logistics/shipments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      state.moduleData.logistics = await apiGet("/api/modules/logistics");
    } catch {
      const logisticsData = state.moduleData.logistics || (await demoPayload("/api/modules/logistics"));
      logisticsData.shipments.unshift({
        id: `EXP-${Math.floor(25000 + Math.random() * 8999)}`,
        ...payload,
        status: "Programado",
        eta: "A confirmar",
        sla: 100
      });
      state.moduleData.logistics = logisticsData;
    }

    state.activeModule = "logistics";
    form.reset();
    dialog.close();
    await renderModule();
  });
};

const setupSearch = () => {
  const input = qs("#searchInput");

  input.addEventListener("input", (event) => {
    state.filter = event.target.value.trim().toLowerCase();
    applyTableFilter();
  });
};

const registerServiceWorker = async () => {
  if ("serviceWorker" in navigator) {
    try {
      await navigator.serviceWorker.register("/sw.js");
    } catch (error) {
      console.warn("Service worker não registrado.", error);
    }
  }
};

const bootstrap = async () => {
  state.summary = await apiGet("/api/summary");
  const requestedModule = new URLSearchParams(window.location.search).get("module") || window.location.hash.slice(1);

  if (state.summary.modules.some((module) => module.id === requestedModule)) {
    state.activeModule = requestedModule;
  }

  renderHeroMetrics();
  renderKpis();
  renderAlerts();
  renderActivity();
  setupDrawer();
  setupDialog();
  setupSearch();
  await renderModule();
  await registerServiceWorker();
};

bootstrap();
