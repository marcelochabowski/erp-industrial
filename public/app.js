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
  kanban: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M9 4v16"/><path d="M15 4v16"/><path d="M6 8h.01"/><path d="M12 12h.01"/><path d="M18 9h.01"/></svg>`,
  userCog: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="10" cy="8" r="4"/><path d="M2 21a8 8 0 0 1 12.3-6.76"/><circle cx="18" cy="17" r="3"/><path d="M18 13v1"/><path d="M18 20v1"/><path d="M14.5 15l.87.5"/><path d="M20.63 18.5l.87.5"/><path d="M14.5 19l.87-.5"/><path d="M20.63 15.5l.87-.5"/></svg>`,
  cpu: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="6" y="6" width="12" height="12" rx="2"/><rect x="10" y="10" width="4" height="4" rx="1"/><path d="M4 10H2"/><path d="M4 14H2"/><path d="M22 10h-2"/><path d="M22 14h-2"/><path d="M10 4V2"/><path d="M14 4V2"/><path d="M10 22v-2"/><path d="M14 22v-2"/></svg>`,
  brain: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M9 3a3 3 0 0 0-3 3v1a3 3 0 0 0-2 5.24A3.5 3.5 0 0 0 7.5 18H9"/><path d="M15 3a3 3 0 0 1 3 3v1a3 3 0 0 1 2 5.24A3.5 3.5 0 0 1 16.5 18H15"/><path d="M9 3v18"/><path d="M15 3v18"/><path d="M9 8H7"/><path d="M15 8h2"/><path d="M9 14H7"/><path d="M15 14h2"/></svg>`
};

const state = {
  summary: null,
  activeModule: "logistics",
  moduleData: {},
  filter: ""
};

const STORAGE_KEY = "nexaforge-erp-functional-data-v1";

const moduleOperations = {
  logistics: {
    title: "Nova expedição",
    submitLabel: "Criar expedição",
    collection: "shipments",
    idPrefix: "EXP",
    statusFlow: ["Separação", "Conferência", "Aguardando NF", "Programado", "Em rota", "Entregue"],
    defaults: { status: "Programado", eta: "A confirmar", sla: 100 },
    fields: [
      { name: "customer", label: "Cliente", placeholder: "Ex.: Atlas Máquinas" },
      { name: "destination", label: "Destino", placeholder: "Cidade, UF" },
      { name: "carrier", label: "Transportadora", placeholder: "Ex.: Frota própria" },
      { name: "volume", label: "Volume", placeholder: "Ex.: 6 pallets" }
    ]
  },
  finance: {
    title: "Novo título a receber",
    submitLabel: "Lançar título",
    collection: "receivables",
    idPrefix: "REC",
    statusFlow: ["Atrasado", "Aprovar", "Programado", "No prazo", "Liquidado"],
    defaults: { status: "No prazo" },
    fields: [
      { name: "customer", label: "Cliente", placeholder: "Ex.: Orion Parts" },
      { name: "due", label: "Vencimento", placeholder: "dd/mm/aaaa" },
      { name: "amount", label: "Valor", type: "number", placeholder: "125000" }
    ]
  },
  hr: {
    title: "Novo colaborador",
    submitLabel: "Cadastrar pessoa",
    collection: "employees",
    idPrefix: "COL",
    statusFlow: ["Férias", "Retorno programado", "Ativo"],
    defaults: { status: "Ativo" },
    fields: [
      { name: "name", label: "Nome", placeholder: "Nome completo" },
      { name: "role", label: "Cargo", placeholder: "Ex.: Analista de PCP" },
      { name: "shift", label: "Turno", type: "select", options: ["A", "B", "C", "Comercial"] }
    ]
  },
  production: {
    title: "Nova ordem de produção",
    submitLabel: "Abrir OP",
    collection: "orders",
    idPrefix: "OP",
    statusFlow: ["Planejamento", "Setup", "Produção", "Qualidade", "Finalizada"],
    defaults: { produced: 0, status: "Planejamento", oee: 0 },
    fields: [
      { name: "item", label: "Item", placeholder: "Ex.: Eixo usinado AX-90" },
      { name: "line", label: "Linha", placeholder: "Ex.: Linha 04" },
      { name: "planned", label: "Quantidade planejada", type: "number", placeholder: "1200" }
    ]
  },
  inventory: {
    title: "Novo material",
    submitLabel: "Cadastrar material",
    collection: "materials",
    idKey: "sku",
    idPrefix: "MAT",
    statusFlow: ["Crítico", "Atenção", "Normal"],
    defaults: { status: "Normal" },
    fields: [
      { name: "name", label: "Material", placeholder: "Ex.: Aço SAE 1020" },
      { name: "balance", label: "Saldo", type: "number", placeholder: "4800" },
      { name: "min", label: "Mínimo", type: "number", placeholder: "3000" },
      { name: "location", label: "Local", placeholder: "Ex.: Rua A-04" }
    ]
  },
  maintenance: {
    title: "Nova ordem de serviço",
    submitLabel: "Abrir OS",
    collection: "workOrders",
    idPrefix: "OS",
    statusFlow: ["Aberta", "Triagem", "Execução", "Teste", "Encerrada"],
    defaults: { status: "Aberta", mttr: "-" },
    fields: [
      { name: "asset", label: "Ativo", placeholder: "Ex.: Prensa P-12" },
      { name: "priority", label: "Prioridade", type: "select", options: ["Alta", "Média", "Baixa"] },
      { name: "technician", label: "Técnico", placeholder: "A definir" }
    ]
  },
  it: {
    title: "Novo chamado de TI",
    submitLabel: "Abrir chamado",
    collection: "tickets",
    idPrefix: "TI",
    statusFlow: ["Aberto", "Classificação", "Atendimento", "Validação", "Fechado"],
    defaults: { status: "Aberto", sla: 100 },
    fields: [
      { name: "requester", label: "Solicitante", placeholder: "Nome ou área" },
      { name: "category", label: "Categoria", placeholder: "Ex.: Sistema MES" },
      { name: "priority", label: "Prioridade", type: "select", options: ["Crítica", "Alta", "Média", "Baixa"] }
    ]
  },
  purchasing: {
    title: "Nova requisição de compra",
    submitLabel: "Criar requisição",
    collection: "requisitions",
    idPrefix: "REQ",
    statusFlow: ["Requisição", "Cotação", "Aprovação", "Pedido", "Recebimento"],
    defaults: { status: "Cotação" },
    fields: [
      { name: "item", label: "Item", placeholder: "Ex.: Rolamento industrial" },
      { name: "requester", label: "Solicitante", placeholder: "Área ou pessoa" },
      { name: "amount", label: "Valor estimado", type: "number", placeholder: "18500" }
    ]
  },
  sales: {
    title: "Nova oportunidade",
    submitLabel: "Criar oportunidade",
    collection: "opportunities",
    idPrefix: "OPV",
    progressField: "stage",
    statusFlow: ["Lead", "Proposta", "Negociação", "Pedido", "Pós-venda"],
    fields: [
      { name: "customer", label: "Cliente", placeholder: "Ex.: Atlas Máquinas" },
      { name: "stage", label: "Etapa", type: "select", options: ["Lead", "Proposta", "Negociação"] },
      { name: "amount", label: "Valor", type: "number", placeholder: "240000" },
      { name: "probability", label: "Probabilidade (%)", type: "number", placeholder: "45" }
    ]
  },
  quality: {
    title: "Nova não conformidade",
    submitLabel: "Registrar NC",
    collection: "nonConformities",
    idPrefix: "NC",
    statusFlow: ["Análise", "Ação corretiva", "Eficácia", "Encerrada"],
    defaults: { status: "Análise" },
    fields: [
      { name: "origin", label: "Origem", placeholder: "Ex.: Inspeção final" },
      { name: "severity", label: "Severidade", type: "select", options: ["Alta", "Média", "Baixa"] },
      { name: "owner", label: "Responsável", placeholder: "Nome ou área" }
    ]
  },
  fiscal: {
    title: "Nova nota fiscal",
    submitLabel: "Registrar NF",
    collection: "invoices",
    idPrefix: "NF",
    statusFlow: ["Aguardando SEFAZ", "Autorizada", "Escriturada", "Apurada"],
    defaults: { status: "Aguardando SEFAZ" },
    fields: [
      { name: "partner", label: "Parceiro", placeholder: "Cliente ou fornecedor" },
      { name: "type", label: "Tipo", type: "select", options: ["NF-e saída", "NF-e entrada", "NFS-e"] },
      { name: "amount", label: "Valor", type: "number", placeholder: "88000" }
    ]
  },
  projects: {
    title: "Novo projeto",
    submitLabel: "Criar projeto",
    collection: "portfolio",
    idPrefix: "PRJ",
    progressField: "phase",
    statusFlow: ["Ideia", "Business case", "Execução", "Go-live", "Benefícios"],
    defaults: { progress: 5 },
    fields: [
      { name: "name", label: "Nome", placeholder: "Ex.: Nova célula robotizada" },
      { name: "phase", label: "Fase", type: "select", options: ["Ideia", "Business case", "Execução"] },
      { name: "budget", label: "Orçamento", type: "number", placeholder: "450000" },
      { name: "progress", label: "Progresso (%)", type: "number", placeholder: "10" }
    ]
  },
  admin: {
    title: "Novo usuário",
    submitLabel: "Adicionar usuário",
    collection: "users",
    idPrefix: "USR",
    statusFlow: ["Pendente", "Ativo", "Bloqueado"],
    defaults: { status: "Ativo", mfa: "Pendente" },
    fields: [
      { name: "name", label: "Nome", placeholder: "Ex.: Ana Pereira" },
      { name: "email", label: "E-mail", type: "email", placeholder: "usuario@empresa.local" },
      { name: "role", label: "Perfil", type: "select", options: ["TI Admin", "Gestor Produção", "Financeiro", "Operador Chão de Fábrica", "Manutenção"] },
      { name: "unit", label: "Unidade", type: "select", options: ["Unidade SP", "Corporativo", "Chão de fábrica", "CD Logístico"] }
    ]
  },
  automation: {
    title: "Novo PLC",
    submitLabel: "Conectar PLC",
    collection: "plcs",
    idPrefix: "PLC",
    statusFlow: ["Desconectado", "Oscilando", "Conectado"],
    defaults: { status: "Conectado", latency: 12, safety: "OK" },
    fields: [
      { name: "name", label: "Nome do controlador", placeholder: "Ex.: PLC célula CNC 04" },
      { name: "line", label: "Linha/Máquina", placeholder: "Ex.: CNC-04" },
      { name: "protocol", label: "Protocolo", type: "select", options: ["OPC UA", "Modbus TCP", "EtherNet/IP", "Profinet"] },
      { name: "ip", label: "IP industrial", placeholder: "10.20.4.14" }
    ]
  },
  ai: {
    title: "Nova pergunta para I.A",
    submitLabel: "Registrar pergunta",
    collection: "requests",
    idPrefix: "IA",
    statusFlow: ["Fila", "Analisando", "Respondido"],
    defaults: { status: "Respondido", confidence: 86 },
    fields: [
      { name: "requester", label: "Solicitante", placeholder: "Ex.: PCP" },
      { name: "scope", label: "Escopo", type: "select", options: ["Produção", "Financeiro", "Estoque", "TI", "Automação/PLC", "Qualidade"] },
      { name: "question", label: "Pergunta", placeholder: "Ex.: qual prioridade da operação agora?" },
      { name: "answer", label: "Resposta sugerida", placeholder: "Resumo da recomendação interna" }
    ]
  }
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
  projects: { value: "58%", label: "CAPEX médio", risk: "1 risco alto" },
  admin: { value: "128", label: "Usuários ativos", risk: "1 MFA pendente" },
  automation: { value: "98,2%", label: "PLCs online", risk: "1 latência alta" },
  ai: { value: "94%", label: "Confiança média", risk: "3 insights críticos" }
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
  projects: ["Ideia", "Business case", "Execução", "Go-live", "Benefícios"],
  admin: ["Usuário", "Perfil", "Permissão", "MFA", "Auditoria"],
  automation: ["Conectar", "Coletar tags", "Validar segurança", "Comandar", "Apontar"],
  ai: ["Pergunta", "Contexto ERP", "Análise", "Recomendação", "Ação"]
};

const moneyFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  maximumFractionDigits: 0
});

const numberFormatter = new Intl.NumberFormat("pt-BR");
const qs = (selector) => document.querySelector(selector);
let demoDataPromise;
let toastTimer;
let liveProductionTimer;
let automationTimer;

const escapeHtml = (value = "") =>
  String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#039;"
  })[char]);

const cloneData = (value) => {
  if (typeof structuredClone === "function") {
    return structuredClone(value);
  }

  return JSON.parse(JSON.stringify(value));
};

const readStoredModules = () => {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch {
    return {};
  }
};

const persistModuleData = (moduleId, data) => {
  try {
    const storedModules = readStoredModules();
    storedModules[moduleId] = cloneData(data);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(storedModules));
  } catch (error) {
    console.warn("Não foi possível salvar os dados locais.", error);
  }
};

const moduleIdFromEndpoint = (endpoint) => endpoint.match(/^\/api\/modules\/([^/]+)$/)?.[1];

const applyStoredModule = (endpoint, payload) => {
  const moduleId = moduleIdFromEndpoint(endpoint);

  if (!moduleId) {
    return payload;
  }

  const storedModule = readStoredModules()[moduleId];
  return storedModule || cloneData(payload);
};

const getOperationConfig = (moduleId = state.activeModule) => moduleOperations[moduleId] || moduleOperations.logistics;

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
    projects: data.projects,
    admin: data.admin,
    automation: data.automation,
    ai: data.ai
  };

  if (endpoint === "/api/summary") {
    return cloneData({
      company: data.company,
      modules: data.modules,
      kpis: data.kpis,
      alerts: data.alerts,
      auditTrail: data.auditTrail
    });
  }

  if (endpoint === "/api/modules") {
    return cloneData(data.modules);
  }

  const moduleMatch = endpoint.match(/^\/api\/modules\/([^/]+)$/);
  if (moduleMatch) {
    return cloneData(modulePayloads[moduleMatch[1]]);
  }

  throw new Error(`Sem fallback para ${endpoint}`);
};

const apiGet = async (endpoint) => {
  try {
    const response = await fetch(endpoint);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    return applyStoredModule(endpoint, await response.json());
  } catch (error) {
    console.info("Usando dados locais de demonstração.", error.message);
    return applyStoredModule(endpoint, await demoPayload(endpoint));
  }
};

const badgeClass = (value = "") => {
  const normalized = value.toLowerCase();

  if (["crítico", "crítica", "atrasado", "alta", "parada", "bloqueado", "reprovado", "desconectado", "intertravado"].some((term) => normalized.includes(term))) {
    return "red";
  }

  if (["atenção", "aprovar", "média", "setup", "aguardando", "análise", "cotação", "mitigando", "oscilando", "pendente"].some((term) => normalized.includes(term))) {
    return "amber";
  }

  if (["normal", "ativo", "finalizada", "operando", "no prazo", "programado", "aprovado", "apurado", "autorizada", "homologado", "conectado", "ok", "respondido", "confiável"].some((term) => normalized.includes(term))) {
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

const table = (title, columns, rows = []) => `
  <article class="table-card ${rows.length > 3 ? "full" : ""}">
    <div class="card-toolbar">
      <h3>${escapeHtml(title)}</h3>
      <button class="ghost-action" type="button" data-table-action="analyze">
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
          <tr>${columns.map((column) => `<th>${escapeHtml(column.label)}</th>`).join("")}</tr>
        </thead>
        <tbody>
          ${rows
            .map(
              (row) => `
                <tr>
                  ${columns
                    .map((column) => {
                      const rawValue = column.render ? column.render(row) : escapeHtml(row[column.key] ?? "");
                      return `<td data-label="${escapeHtml(column.label)}">${rawValue}</td>`;
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
      <h3>${escapeHtml(title)}</h3>
      <span class="mini-chip">Tempo real</span>
    </div>
    <div class="progress-row">
      ${rows
        .map(
          (row) => `
            <div class="progress-item">
              <div class="progress-label">
                <span>${escapeHtml(row[labelKey] ?? "")}</span>
                <strong>${escapeHtml(row[valueKey] ?? "")}${escapeHtml(suffix)}</strong>
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
    ],
    admin: () => [
      ["Usuários", data.users.length],
      ["Perfis", data.roles.length],
      ["MFA pendente", data.users.filter((item) => item.mfa !== "Ativo").length]
    ],
    automation: () => [
      ["PLCs", data.plcs.length],
      ["Conectados", data.plcs.filter((item) => item.status === "Conectado").length],
      ["Alarmes", data.alarms.length]
    ],
    ai: () => [
      ["Consultas", data.requests.length],
      ["Playbooks", data.playbooks.length],
      ["Confiança", `${Math.round(data.requests.reduce((sum, item) => sum + item.confidence, 0) / data.requests.length)}%`]
    ]
  };

  return (builders[state.activeModule]?.() || []).map(([label, value]) => ({ label, value }));
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

const liveProductionBoard = (cells = []) => `
  <article class="live-floor full">
    <div class="card-toolbar">
      <h3>Produção ao vivo</h3>
      <span class="live-pill">Tempo real</span>
    </div>
    <div class="live-grid">
      ${cells
        .map((cell) => {
          const performance = Math.round((Number(cell.producedHour || 0) / Math.max(Number(cell.targetHour || 1), 1)) * 100);
          return `
            <section class="live-cell" data-live-line="${escapeHtml(cell.line)}">
              <div class="live-cell-head">
                <span>${escapeHtml(cell.line)}</span>
                <strong class="badge ${badgeClass(cell.status)}" data-live-status>${escapeHtml(cell.status)}</strong>
              </div>
              <h4>${escapeHtml(cell.machine)}</h4>
              <p>${escapeHtml(cell.order)} · ${escapeHtml(cell.operator)}</p>
              <div class="live-metrics">
                <span><b data-live-produced>${numberFormatter.format(cell.producedHour)}</b><small>un/h</small></span>
                <span><b data-live-cycle>${numberFormatter.format(cell.cycle)}</b><small>ciclo s</small></span>
                <span><b data-live-temp>${numberFormatter.format(cell.temperature)}°C</b><small>temp.</small></span>
              </div>
              <div class="progress-track">
                <div class="progress-fill" data-live-progress style="--progress: ${Math.min(performance, 100)}%"></div>
              </div>
              <small>${performance}% da meta horária · Qualidade ${numberFormatter.format(cell.quality)}%</small>
            </section>
          `;
        })
        .join("")}
    </div>
  </article>
`;

const renderProduction = (data) => `
  <div class="module-grid">
    ${liveProductionBoard(data.liveCells || [])}
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

const yesNo = (value) => `<span class="permission-dot ${value ? "allowed" : ""}">${value ? "Sim" : "Não"}</span>`;

const renderAdmin = (data) => `
  <div class="module-grid">
    ${table("Usuários e acessos", [
      { label: "ID", key: "id" },
      { label: "Nome", key: "name" },
      { label: "E-mail", key: "email" },
      { label: "Perfil", key: "role" },
      { label: "Unidade", key: "unit" },
      { label: "MFA", render: (row) => `<span class="badge ${badgeClass(row.mfa)}">${escapeHtml(row.mfa)}</span>` },
      { label: "Status", render: (row) => `<span class="badge ${badgeClass(row.status)}">${escapeHtml(row.status)}</span>` }
    ], data.users)}
    ${table("Perfis de permissão", [
      { label: "Perfil", key: "name" },
      { label: "Usuários", render: (row) => numberFormatter.format(row.users) },
      { label: "Permissões", render: (row) => numberFormatter.format(row.permissions) },
      { label: "Risco", render: (row) => `<span class="badge ${badgeClass(row.risk)}">${escapeHtml(row.risk)}</span>` }
    ], data.roles)}
    ${table("Matriz de permissões", [
      { label: "Módulo", key: "module" },
      { label: "Ler", render: (row) => yesNo(row.read) },
      { label: "Criar", render: (row) => yesNo(row.create) },
      { label: "Aprovar", render: (row) => yesNo(row.approve) },
      { label: "Admin", render: (row) => yesNo(row.admin) }
    ], data.permissions)}
    ${table("Sessões ativas", [
      { label: "Usuário", key: "user" },
      { label: "Dispositivo", key: "device" },
      { label: "Local", key: "location" },
      { label: "Último acesso", key: "lastAccess" },
      { label: "Status", render: (row) => `<span class="badge ${badgeClass(row.status)}">${escapeHtml(row.status)}</span>` }
    ], data.sessions)}
  </div>
`;

const renderAutomation = (data) => `
  <div class="module-grid">
    <article class="plc-map full">
      <div class="card-toolbar">
        <h3>Mapa de automação industrial</h3>
        <span class="live-pill">PLC / máquinas autônomas</span>
      </div>
      <div class="plc-grid">
        ${data.plcs
          .map(
            (plc) => `
              <section class="plc-node" data-plc-id="${escapeHtml(plc.id)}">
                <div>
                  <strong>${escapeHtml(plc.id)}</strong>
                  <span class="badge ${badgeClass(plc.status)}">${escapeHtml(plc.status)}</span>
                </div>
                <p>${escapeHtml(plc.name)} · ${escapeHtml(plc.protocol)}</p>
                <small>${escapeHtml(plc.ip)} · ${escapeHtml(plc.line)} · Safety ${escapeHtml(plc.safety)}</small>
                <b data-plc-latency>${numberFormatter.format(plc.latency)} ms</b>
              </section>
            `
          )
          .join("")}
      </div>
    </article>
    ${table("Máquinas autônomas", [
      { label: "Ativo", key: "id" },
      { label: "Tipo", key: "type" },
      { label: "Tarefa", key: "task" },
      { label: "Bateria", render: (row) => `${row.battery}%` },
      { label: "Status", render: (row) => `<span class="badge ${badgeClass(row.status)}">${escapeHtml(row.status)}</span>` },
      { label: "Zona", key: "zone" }
    ], data.autonomousMachines)}
    ${table("Tags industriais", [
      { label: "Tag", key: "tag" },
      { label: "Valor", key: "value" },
      { label: "Origem", key: "source" },
      { label: "Status", render: (row) => `<span class="badge ${badgeClass(row.status)}">${escapeHtml(row.status)}</span>` }
    ], data.tags)}
    ${table("Alarmes PLC", [
      { label: "Alarme", key: "id" },
      { label: "Ativo", key: "asset" },
      { label: "Severidade", render: (row) => `<span class="badge ${badgeClass(row.severity)}">${escapeHtml(row.severity)}</span>` },
      { label: "Mensagem", key: "message" },
      { label: "Reconhecido", key: "acknowledged" }
    ], data.alarms)}
  </div>
`;

const buildInternalAiAnswer = (question = "", scope = "ERP") => {
  const normalized = question.toLowerCase();

  if (normalized.includes("produção") || normalized.includes("producao") || normalized.includes("linha") || normalized.includes("oee")) {
    return "Prioridade operacional: recuperar a CNC-03, validar o PLC-CNC-03 e replanejar a OP-7813. A linha parada derruba OEE e pode atrasar pedidos vinculados.";
  }

  if (normalized.includes("estoque") || normalized.includes("material") || normalized.includes("mrp")) {
    return "Risco de estoque: MAT-1020 está abaixo do mínimo. Sugiro compra emergencial, reserva para OP-7811 e comunicação ao PCP.";
  }

  if (normalized.includes("plc") || normalized.includes("automação") || normalized.includes("automacao") || normalized.includes("máquina") || normalized.includes("maquina")) {
    return "Automação: PLC-CNC-03 está oscilando e deve ser validado antes de liberar comando automático. Verifique rede industrial, intertravamento e latência OPC UA.";
  }

  if (normalized.includes("permiss") || normalized.includes("usuário") || normalized.includes("usuario") || normalized.includes("acesso")) {
    return "Governança: existe MFA pendente. Recomendo bloquear permissões críticas até ativar MFA e revisar perfis com aprovação financeira ou PLC.";
  }

  if (normalized.includes("financeiro") || normalized.includes("caixa") || normalized.includes("pagamento")) {
    return "Financeiro: há recebível atrasado e pagamento pendente. Priorize cobrança do título vencido e aprovação do PAG-3319 para evitar ruptura operacional.";
  }

  return `Análise ${scope}: priorize exceções críticas, valide impacto em produção, estoque e permissões, e registre a ação no fluxo do módulo responsável.`;
};

const renderAi = (data) => `
  <div class="module-grid">
    <article class="ai-console full">
      <div class="card-toolbar">
        <h3>I.A interna do ERP</h3>
        <span class="live-pill">Local e contextual</span>
      </div>
      <div class="ai-grid">
        <div class="ai-prompt">
          <label for="aiRequester">Solicitante</label>
          <input id="aiRequester" value="Operador ERP" />
          <label for="aiScope">Escopo</label>
          <select id="aiScope">
            <option>Produção</option>
            <option>Automação/PLC</option>
            <option>Estoque</option>
            <option>Financeiro</option>
            <option>Administração</option>
          </select>
          <label for="aiQuestion">Pergunta</label>
          <textarea id="aiQuestion" rows="4" placeholder="Ex.: qual gargalo devo atacar agora?"></textarea>
          <button class="primary-action" type="button" id="aiAskButton">${icons.brain} Perguntar</button>
        </div>
        <div class="ai-answer" id="aiAnswerBox">
          <strong>Pronto para analisar</strong>
          <p>Use a I.A interna para cruzar produção, PLC, estoque, financeiro e permissões do ERP.</p>
        </div>
      </div>
    </article>
    ${table("Consultas da I.A", [
      { label: "ID", key: "id" },
      { label: "Solicitante", key: "requester" },
      { label: "Escopo", key: "scope" },
      { label: "Pergunta", key: "question" },
      { label: "Resposta", key: "answer" },
      { label: "Conf.", render: (row) => `${row.confidence}%` },
      { label: "Status", render: (row) => `<span class="badge ${badgeClass(row.status)}">${escapeHtml(row.status)}</span>` }
    ], data.requests)}
    ${table("Playbooks automáticos", [
      { label: "Playbook", key: "name" },
      { label: "Gatilho", key: "trigger" },
      { label: "Ação", key: "action" },
      { label: "Status", render: (row) => `<span class="badge ${badgeClass(row.status)}">${escapeHtml(row.status)}</span>` }
    ], data.playbooks)}
    ${table("Insights internos", [
      { label: "Área", key: "area" },
      { label: "Insight", key: "insight" },
      { label: "Impacto", render: (row) => `<span class="badge ${badgeClass(row.impact)}">${escapeHtml(row.impact)}</span>` }
    ], data.insights)}
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
  projects: renderProjects,
  admin: renderAdmin,
  automation: renderAutomation,
  ai: renderAi
};

const showToast = (message) => {
  let toast = qs("#toast");

  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast";
    toast.className = "toast";
    toast.setAttribute("role", "status");
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("show"), 2600);
};

const addAudit = (action) => {
  if (!state.summary?.auditTrail) {
    return;
  }

  state.summary.auditTrail = [
    {
      time: "Agora",
      user: "Operador ERP",
      action
    },
    ...state.summary.auditTrail
  ].slice(0, 8);
  renderActivity();
};

const operationEndpoint = (moduleId = state.activeModule, config = getOperationConfig(moduleId)) =>
  `/api/modules/${moduleId}/${config.collection}`;

const generateRecordId = (prefix) => `${prefix}-${Math.floor(10000 + Math.random() * 89999)}`;

const renderOperationField = (field) => {
  const required = field.required === false ? "" : " required";
  const placeholder = field.placeholder ? ` placeholder="${escapeHtml(field.placeholder)}"` : "";

  if (field.type === "select") {
    return `
      <label>
        ${escapeHtml(field.label)}
        <select name="${escapeHtml(field.name)}"${required}>
          ${(field.options || [])
            .map((option) => `<option value="${escapeHtml(option)}">${escapeHtml(option)}</option>`)
            .join("")}
        </select>
      </label>
    `;
  }

  const inputType = field.type === "number" ? "number" : field.type || "text";
  const numericAttrs = field.type === "number" ? ' inputmode="decimal" step="0.01"' : "";

  return `
    <label>
      ${escapeHtml(field.label)}
      <input name="${escapeHtml(field.name)}" type="${inputType}"${numericAttrs}${placeholder}${required} />
    </label>
  `;
};

const renderOperationForm = () => {
  const config = getOperationConfig();
  const module = getModule();
  const title = qs("#operationTitle");
  const eyebrow = qs("#operationEyebrow");
  const fields = qs("#dynamicFormFields");
  const submit = qs("#operationSubmit");

  eyebrow.textContent = "Registro rápido";
  title.textContent = config.title;
  fields.innerHTML = config.fields.map(renderOperationField).join("");
  submit.textContent = config.submitLabel;
  submit.style.setProperty("--module-accent", module.accent);
};

const normalizeFormValue = (field, value) => {
  const trimmed = typeof value === "string" ? value.trim() : value;

  if (field.type === "number") {
    return Number(trimmed || 0);
  }

  return trimmed;
};

const operationPayloadFromForm = (form, config) => {
  const formData = new FormData(form);

  return config.fields.reduce((payload, field) => {
    payload[field.name] = normalizeFormValue(field, formData.get(field.name));
    return payload;
  }, {});
};

const createRecord = (config, payload, serverRecord = null) => {
  const idKey = config.idKey || "id";

  return {
    [idKey]: serverRecord?.[idKey] || payload[idKey] || generateRecordId(config.idPrefix),
    ...(config.defaults || {}),
    ...payload,
    ...(serverRecord || {})
  };
};

const saveOperationRecord = async (moduleId, payload) => {
  const config = getOperationConfig(moduleId);
  const module = getModule(moduleId);
  let serverRecord = null;

  try {
    const response = await fetch(operationEndpoint(moduleId, config), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    serverRecord = await response.json();
  } catch (error) {
    console.info("Registro salvo no modo local.", error.message);
  }

  const moduleData = state.moduleData[moduleId] || (await apiGet(`/api/modules/${moduleId}`));
  const record = createRecord(config, payload, serverRecord);
  moduleData[config.collection] = [record, ...(moduleData[config.collection] || [])];
  state.moduleData[moduleId] = moduleData;
  persistModuleData(moduleId, moduleData);
  addAudit(`${module.name}: ${config.submitLabel.toLowerCase()} ${record[config.idKey || "id"]}.`);
  return record;
};

const getActiveCollection = () => {
  const config = getOperationConfig();
  const data = state.moduleData[state.activeModule];

  return {
    config,
    data,
    rows: data?.[config.collection] || []
  };
};

const csvCell = (value) => {
  const text = String(value ?? "");
  return /[;"\n\r]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
};

const exportActiveCollection = () => {
  const { config, rows } = getActiveCollection();
  const module = getModule();

  if (!rows.length) {
    showToast("Não há registros para exportar.");
    return;
  }

  const columns = [...rows.reduce((keys, row) => {
    Object.keys(row).forEach((key) => keys.add(key));
    return keys;
  }, new Set())];
  const csv = [
    columns.map(csvCell).join(";"),
    ...rows.map((row) => columns.map((column) => csvCell(row[column])).join(";"))
  ].join("\r\n");
  const blob = new Blob([`\uFEFF${csv}`], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = `erp-${state.activeModule}-${config.collection}.csv`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  addAudit(`${module.name}: exportação CSV gerada.`);
  showToast("Exportação CSV gerada.");
};

const nextFlowValue = (flow, currentValue) => {
  const normalized = String(currentValue || "").toLowerCase();
  const index = flow.findIndex((item) => item.toLowerCase() === normalized);

  if (index === -1) {
    return flow[0] || "Atualizado";
  }

  return flow[Math.min(index + 1, flow.length - 1)];
};

const advanceActiveRecord = async () => {
  const { config, data, rows } = getActiveCollection();
  const module = getModule();

  if (!rows.length) {
    showToast("Não há registros para atualizar.");
    return;
  }

  const record = rows[0];
  const idKey = config.idKey || "id";
  const progressField =
    config.progressField ||
    ["status", "stage", "phase", "result"].find((field) => Object.prototype.hasOwnProperty.call(record, field)) ||
    (Object.prototype.hasOwnProperty.call(record, "progress") ? "progress" : null);

  if (!progressField) {
    showToast("Este módulo não possui status para avançar.");
    return;
  }

  const patch = {};

  if (typeof record[progressField] === "number" || progressField === "progress") {
    record[progressField] = Math.min(100, Number(record[progressField] || 0) + 15);
  } else {
    record[progressField] = nextFlowValue(config.statusFlow || processFlows[state.activeModule], record[progressField]);
  }

  patch[progressField] = record[progressField];

  if (progressField === "stage" && Object.prototype.hasOwnProperty.call(record, "probability")) {
    record.probability = Math.min(100, Number(record.probability || 0) + 15);
    patch.probability = record.probability;
  }

  if (progressField === "phase" && Object.prototype.hasOwnProperty.call(record, "progress")) {
    record.progress = Math.min(100, Number(record.progress || 0) + 20);
    patch.progress = record.progress;
  }

  state.moduleData[state.activeModule] = data;
  persistModuleData(state.activeModule, data);

  try {
    await fetch(`${operationEndpoint()}/${encodeURIComponent(record[idKey])}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(patch)
    });
  } catch (error) {
    console.info("Atualização mantida localmente.", error.message);
  }

  addAudit(`${module.name}: ${record[idKey]} atualizado para ${record[progressField]}.`);
  showToast("Status atualizado.");
  await renderModule();
};

const clearLiveTimers = () => {
  clearInterval(liveProductionTimer);
  clearInterval(automationTimer);
  liveProductionTimer = null;
  automationTimer = null;
};

const setupProductionLive = () => {
  if (state.activeModule !== "production") {
    return;
  }

  const data = state.moduleData.production;
  if (!data?.liveCells?.length) {
    return;
  }

  liveProductionTimer = window.setInterval(() => {
    data.liveCells.forEach((cell) => {
      if (cell.status !== "Operando") {
        return;
      }

      cell.producedHour = Math.min(cell.targetHour + 24, Math.max(0, cell.producedHour + Math.round(Math.random() * 8 - 2)));
      cell.cycle = Math.max(30, cell.cycle + Math.round(Math.random() * 4 - 2));
      cell.temperature = Math.max(35, Math.min(86, cell.temperature + Math.round(Math.random() * 4 - 1)));

      const node = document.querySelector(`[data-live-line="${CSS.escape(cell.line)}"]`);
      if (!node) {
        return;
      }

      const performance = Math.round((cell.producedHour / Math.max(cell.targetHour, 1)) * 100);
      node.querySelector("[data-live-produced]").textContent = numberFormatter.format(cell.producedHour);
      node.querySelector("[data-live-cycle]").textContent = numberFormatter.format(cell.cycle);
      node.querySelector("[data-live-temp]").textContent = `${numberFormatter.format(cell.temperature)}°C`;
      node.querySelector("[data-live-progress]").style.setProperty("--progress", `${Math.min(performance, 100)}%`);
    });
  }, 2600);
};

const setupAutomationLive = () => {
  if (state.activeModule !== "automation") {
    return;
  }

  const data = state.moduleData.automation;
  if (!data?.plcs?.length) {
    return;
  }

  automationTimer = window.setInterval(() => {
    data.plcs.forEach((plc) => {
      if (plc.status === "Desconectado") {
        return;
      }

      const base = plc.status === "Oscilando" ? 95 : 18;
      plc.latency = Math.max(8, base + Math.round(Math.random() * 42));
      const node = document.querySelector(`[data-plc-id="${CSS.escape(plc.id)}"] [data-plc-latency]`);

      if (node) {
        node.textContent = `${numberFormatter.format(plc.latency)} ms`;
      }
    });
  }, 3000);
};

const setupInternalAi = () => {
  if (state.activeModule !== "ai") {
    return;
  }

  qs("#aiAskButton")?.addEventListener("click", async () => {
    const requester = qs("#aiRequester").value.trim() || "Operador ERP";
    const scope = qs("#aiScope").value;
    const question = qs("#aiQuestion").value.trim();

    if (!question) {
      showToast("Digite uma pergunta para a I.A.");
      return;
    }

    const answer = buildInternalAiAnswer(question, scope);
    const confidence = Math.floor(84 + Math.random() * 13);
    const answerBox = qs("#aiAnswerBox");

    answerBox.innerHTML = `
      <strong>Resposta da I.A interna</strong>
      <p>${escapeHtml(answer)}</p>
      <small>Confiança ${confidence}% · contexto ${escapeHtml(scope)}</small>
    `;

    await saveOperationRecord("ai", {
      requester,
      scope,
      question,
      answer,
      confidence,
      status: "Respondido"
    });

    qs("#aiQuestion").value = "";
    showToast("I.A interna registrou a recomendação.");
    await renderModule();
    qs("#aiAnswerBox").innerHTML = `
      <strong>Resposta da I.A interna</strong>
      <p>${escapeHtml(answer)}</p>
      <small>Confiança ${confidence}% · contexto ${escapeHtml(scope)}</small>
    `;
  });
};

const setupModuleActions = () => {
  qs("#moduleView")?.querySelector("[data-action='export']")?.addEventListener("click", exportActiveCollection);
  qs("#moduleView")?.querySelector("[data-action='advance']")?.addEventListener("click", advanceActiveRecord);
  qs("#moduleView")
    ?.querySelectorAll("[data-table-action='analyze']")
    .forEach((button) => {
      button.addEventListener("click", () => showToast("Análise atualizada com os dados filtrados."));
    });
  setupProductionLive();
  setupAutomationLive();
  setupInternalAi();
};

const renderModule = async () => {
  clearLiveTimers();
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
        <button class="secondary-action" type="button" data-action="export">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <path d="M7 10l5 5 5-5"></path>
            <path d="M12 15V3"></path>
          </svg>
          Exportar
        </button>
        <button class="primary-action" type="button" data-action="advance">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
          Avançar status
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

  setupModuleActions();
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
    form.reset();
    renderOperationForm();
    dialog.showModal();
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const submitter = event.submitter;
    if (submitter?.value === "cancel") {
      dialog.close();
      return;
    }

    const moduleId = state.activeModule;
    const config = getOperationConfig(moduleId);
    const payload = operationPayloadFromForm(form, config);
    await saveOperationRecord(moduleId, payload);
    showToast("Registro salvo.");
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
