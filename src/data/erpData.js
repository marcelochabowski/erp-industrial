export const company = {
  name: "NexaForge Industrial",
  unit: "Unidade Metal-Mecânica SP",
  currency: "BRL",
  timezone: "America/Sao_Paulo"
};

export const modules = [
  {
    id: "logistics",
    name: "Logística",
    description: "Expedição, fretes, entregas, docas e nível de serviço.",
    accent: "#0f766e",
    icon: "truck"
  },
  {
    id: "finance",
    name: "Financeiro",
    description: "Fluxo de caixa, contas a pagar, receber, custos e margem.",
    accent: "#2563eb",
    icon: "wallet"
  },
  {
    id: "hr",
    name: "RH",
    description: "Pessoas, turnos, férias, treinamentos e indicadores.",
    accent: "#7c3aed",
    icon: "users"
  },
  {
    id: "production",
    name: "Produção",
    description: "Ordens de produção, OEE, refugos, setups e chão de fábrica.",
    accent: "#b45309",
    icon: "factory"
  },
  {
    id: "inventory",
    name: "Estoque",
    description: "Materiais críticos, saldos, MRP e rastreabilidade.",
    accent: "#047857",
    icon: "boxes"
  },
  {
    id: "maintenance",
    name: "Manutenção",
    description: "OS, preventivas, ativos, paradas e MTTR.",
    accent: "#be123c",
    icon: "wrench"
  },
  {
    id: "it",
    name: "Gestão de TI",
    description: "Service desk, ativos, sistemas, SLA, acessos e segurança.",
    accent: "#0a6ed1",
    icon: "server"
  },
  {
    id: "purchasing",
    name: "Compras",
    description: "Requisições, cotações, pedidos, fornecedores e contratos.",
    accent: "#0891b2",
    icon: "cart"
  },
  {
    id: "sales",
    name: "Comercial/CRM",
    description: "Clientes, oportunidades, propostas, pedidos e carteira.",
    accent: "#16a34a",
    icon: "handshake"
  },
  {
    id: "quality",
    name: "Qualidade",
    description: "Não conformidades, inspeções, certificados e planos de ação.",
    accent: "#9333ea",
    icon: "shield"
  },
  {
    id: "fiscal",
    name: "Fiscal/Contábil",
    description: "NF-e, impostos, apurações, centros de custo e contabilidade.",
    accent: "#475569",
    icon: "file"
  },
  {
    id: "projects",
    name: "Projetos",
    description: "Engenharia, CAPEX, cronograma, marcos, custos e riscos.",
    accent: "#c2410c",
    icon: "kanban"
  }
];

export const kpis = [
  {
    id: "daily-output",
    label: "Produção hoje",
    value: "18.240",
    suffix: "un",
    delta: 7.8,
    trend: "up"
  },
  {
    id: "cash-flow",
    label: "Caixa projetado",
    value: "R$ 1,84 mi",
    suffix: "30 dias",
    delta: 4.1,
    trend: "up"
  },
  {
    id: "delivery-sla",
    label: "Entregas no prazo",
    value: "94,6%",
    suffix: "mês",
    delta: -1.2,
    trend: "down"
  },
  {
    id: "oee",
    label: "OEE médio",
    value: "82,4%",
    suffix: "linhas",
    delta: 2.4,
    trend: "up"
  },
  {
    id: "it-sla",
    label: "SLA de TI",
    value: "91,8%",
    suffix: "chamados",
    delta: -2.1,
    trend: "down"
  },
  {
    id: "quality-reject",
    label: "Reprovação qualidade",
    value: "1,7%",
    suffix: "lote",
    delta: -0.6,
    trend: "up"
  }
];

export const alerts = [
  {
    id: "AL-1008",
    severity: "critical",
    module: "Estoque",
    title: "Aço SAE 1020 abaixo do ponto de pedido",
    detail: "Saldo atual cobre 1,8 dias de produção. Sugestão: compra emergencial de 12 t.",
    due: "Hoje, 16:00"
  },
  {
    id: "AL-1011",
    severity: "warning",
    module: "Financeiro",
    title: "Duplicatas a vencer acima do previsto",
    detail: "R$ 428 mil concentrados nos próximos 5 dias.",
    due: "Esta semana"
  },
  {
    id: "AL-1017",
    severity: "info",
    module: "RH",
    title: "Treinamento NR-12 pendente",
    detail: "9 colaboradores do turno B precisam reciclar certificação.",
    due: "12/05/2026"
  },
  {
    id: "AL-1020",
    severity: "warning",
    module: "Gestão de TI",
    title: "SLA de chamados abaixo da meta",
    detail: "8 chamados críticos estão aguardando atendimento em sistemas industriais.",
    due: "Hoje, 17:30"
  },
  {
    id: "AL-1022",
    severity: "critical",
    module: "Qualidade",
    title: "Lote aguardando disposição",
    detail: "NC-7782 bloqueia 1.240 peças do cliente Atlas Máquinas.",
    due: "Imediato"
  }
];

export const logistics = {
  shipments: [
    {
      id: "EXP-24091",
      customer: "Atlas Máquinas",
      destination: "Campinas, SP",
      status: "Em rota",
      carrier: "RodoSul",
      eta: "03/05/2026 18:40",
      volume: "8 pallets",
      sla: 96
    },
    {
      id: "EXP-24092",
      customer: "Mineração Vale Norte",
      destination: "Parauapebas, PA",
      status: "Separação",
      carrier: "TransBeta",
      eta: "04/05/2026 09:20",
      volume: "2 contêineres",
      sla: 88
    },
    {
      id: "EXP-24093",
      customer: "Metalúrgica Orion",
      destination: "Joinville, SC",
      status: "Aguardando NF",
      carrier: "Frota própria",
      eta: "03/05/2026 21:10",
      volume: "14 caixas",
      sla: 74
    }
  ],
  docks: [
    { id: "Doca 01", status: "Carregando", order: "EXP-24091", progress: 68 },
    { id: "Doca 02", status: "Livre", order: "-", progress: 0 },
    { id: "Doca 03", status: "Conferência", order: "EXP-24093", progress: 42 }
  ]
};

export const finance = {
  cashFlow: [
    { month: "Mai", income: 2480000, expense: 2110000 },
    { month: "Jun", income: 2660000, expense: 2240000 },
    { month: "Jul", income: 2730000, expense: 2290000 },
    { month: "Ago", income: 2810000, expense: 2360000 },
    { month: "Set", income: 2950000, expense: 2410000 },
    { month: "Out", income: 3070000, expense: 2490000 }
  ],
  receivables: [
    { id: "REC-8841", customer: "Atlas Máquinas", due: "06/05/2026", amount: 182400, status: "No prazo" },
    { id: "REC-8842", customer: "Orion Parts", due: "09/05/2026", amount: 94300, status: "No prazo" },
    { id: "REC-8843", customer: "Vale Norte", due: "02/05/2026", amount: 268900, status: "Atrasado" }
  ],
  payables: [
    { id: "PAG-3319", supplier: "Aços Paulista", due: "04/05/2026", amount: 221800, status: "Aprovar" },
    { id: "PAG-3320", supplier: "Energia SP", due: "08/05/2026", amount: 87400, status: "Programado" },
    { id: "PAG-3321", supplier: "RodoSul", due: "11/05/2026", amount: 32600, status: "Programado" }
  ]
};

export const hr = {
  headcount: [
    { area: "Produção", employees: 184, absences: 7, overtime: 126 },
    { area: "Logística", employees: 42, absences: 2, overtime: 31 },
    { area: "Manutenção", employees: 29, absences: 1, overtime: 44 },
    { area: "Administrativo", employees: 51, absences: 3, overtime: 18 }
  ],
  employees: [
    { id: "COL-1022", name: "Marina Lopes", role: "Supervisora de Produção", shift: "A", status: "Ativo" },
    { id: "COL-1147", name: "Rafael Mendes", role: "Técnico de Manutenção", shift: "B", status: "Ativo" },
    { id: "COL-1260", name: "Bianca Costa", role: "Analista Financeira", shift: "Comercial", status: "Férias" },
    { id: "COL-1304", name: "Daniel Souza", role: "Operador CNC", shift: "C", status: "Treinamento" }
  ],
  trainings: [
    { name: "NR-12 Segurança em Máquinas", completion: 78 },
    { name: "Lean Manufacturing", completion: 64 },
    { name: "5S Operacional", completion: 91 }
  ]
};

export const production = {
  orders: [
    {
      id: "OP-7811",
      item: "Eixo usinado 45 mm",
      line: "CNC-02",
      planned: 5200,
      produced: 3980,
      status: "Em produção",
      oee: 84
    },
    {
      id: "OP-7812",
      item: "Suporte hidráulico H90",
      line: "Solda-01",
      planned: 900,
      produced: 900,
      status: "Finalizada",
      oee: 89
    },
    {
      id: "OP-7813",
      item: "Flange inox 2 pol",
      line: "CNC-04",
      planned: 3200,
      produced: 1410,
      status: "Setup",
      oee: 61
    }
  ],
  lineStatus: [
    { line: "CNC-01", status: "Operando", oee: 86, scrap: 1.8 },
    { line: "CNC-02", status: "Operando", oee: 84, scrap: 2.1 },
    { line: "CNC-03", status: "Parada", oee: 0, scrap: 0 },
    { line: "Solda-01", status: "Operando", oee: 89, scrap: 1.2 }
  ]
};

export const inventory = {
  materials: [
    { sku: "MAT-1020", name: "Aço SAE 1020", balance: "4,8 t", min: "12 t", status: "Crítico", location: "ALM-A1" },
    { sku: "MAT-304", name: "Chapa inox 304", balance: "21 t", min: "10 t", status: "Normal", location: "ALM-B4" },
    { sku: "MAT-EPX", name: "Tinta epóxi cinza", balance: "318 L", min: "250 L", status: "Normal", location: "QUI-02" },
    { sku: "MAT-ROL", name: "Rolamento 6205", balance: "92 un", min: "140 un", status: "Atenção", location: "MAN-01" }
  ],
  movements: [
    { id: "MOV-9910", type: "Saída", material: "Aço SAE 1020", qty: "1,2 t", order: "OP-7811", date: "03/05/2026 08:12" },
    { id: "MOV-9911", type: "Entrada", material: "Chapa inox 304", qty: "6 t", order: "NF-55204", date: "03/05/2026 10:28" },
    { id: "MOV-9912", type: "Reserva", material: "Rolamento 6205", qty: "18 un", order: "OS-4402", date: "03/05/2026 11:04" }
  ]
};

export const maintenance = {
  workOrders: [
    { id: "OS-4401", asset: "CNC-03", priority: "Alta", status: "Em atendimento", mttr: "2h 40m", technician: "Rafael Mendes" },
    { id: "OS-4402", asset: "Compressor K-18", priority: "Média", status: "Aberta", mttr: "-", technician: "A definir" },
    { id: "OS-4403", asset: "Ponte rolante 02", priority: "Baixa", status: "Planejada", mttr: "-", technician: "Equipe B" }
  ],
  assets: [
    { id: "CNC-01", availability: 97, nextPm: "10/05/2026" },
    { id: "CNC-02", availability: 95, nextPm: "12/05/2026" },
    { id: "CNC-03", availability: 62, nextPm: "Em corretiva" },
    { id: "COMP-K18", availability: 91, nextPm: "17/05/2026" }
  ]
};

export const it = {
  tickets: [
    { id: "TI-9021", requester: "Marina Lopes", category: "MES", priority: "Alta", status: "Em atendimento", sla: 72 },
    { id: "TI-9022", requester: "PCP", category: "Integração ERP-MRP", priority: "Crítica", status: "Aberto", sla: 41 },
    { id: "TI-9023", requester: "Financeiro", category: "Acesso", priority: "Média", status: "Aguardando aprovação", sla: 88 },
    { id: "TI-9024", requester: "Almoxarifado", category: "Coletor RFID", priority: "Baixa", status: "Programado", sla: 96 }
  ],
  assets: [
    { id: "NB-1844", type: "Notebook", owner: "Bianca Costa", health: 92, status: "Ativo" },
    { id: "SRV-MES-01", type: "Servidor", owner: "Operações", health: 78, status: "Atenção" },
    { id: "CLT-RFID-07", type: "Coletor", owner: "Estoque", health: 64, status: "Manutenção" },
    { id: "FW-EDGE-01", type: "Firewall", owner: "TI", health: 98, status: "Ativo" }
  ],
  systems: [
    { name: "ERP Core", availability: 99.8 },
    { name: "MES Chão de Fábrica", availability: 97.6 },
    { name: "WMS", availability: 98.9 },
    { name: "BI Executivo", availability: 99.1 }
  ]
};

export const purchasing = {
  requisitions: [
    { id: "REQ-5510", item: "Aço SAE 1020", requester: "MRP", amount: 612000, status: "Cotação" },
    { id: "REQ-5511", item: "Rolamento 6205", requester: "Manutenção", amount: 18400, status: "Aprovar" },
    { id: "REQ-5512", item: "EPIs solda", requester: "RH", amount: 9200, status: "Pedido emitido" }
  ],
  suppliers: [
    { name: "Aços Paulista", rating: 94, leadTime: "5 dias", status: "Homologado" },
    { name: "TechParts CNC", rating: 89, leadTime: "8 dias", status: "Homologado" },
    { name: "SafeWork EPIs", rating: 82, leadTime: "3 dias", status: "Atenção" }
  ]
};

export const sales = {
  opportunities: [
    { id: "OPV-3104", customer: "Atlas Máquinas", stage: "Proposta", amount: 940000, probability: 72 },
    { id: "OPV-3105", customer: "Vale Norte", stage: "Negociação", amount: 1280000, probability: 64 },
    { id: "OPV-3106", customer: "Orion Parts", stage: "Qualificação", amount: 312000, probability: 38 }
  ],
  orders: [
    { id: "PED-7712", customer: "Atlas Máquinas", delivery: "08/05/2026", amount: 426000, status: "Em produção" },
    { id: "PED-7713", customer: "Orion Parts", delivery: "12/05/2026", amount: 184500, status: "Programado" },
    { id: "PED-7714", customer: "Vale Norte", delivery: "18/05/2026", amount: 782000, status: "Aguardando crédito" }
  ]
};

export const quality = {
  inspections: [
    { id: "INSP-8840", item: "Eixo usinado 45 mm", result: "Aprovado", sample: "80 un", inspector: "Equipe Q1" },
    { id: "INSP-8841", item: "Flange inox 2 pol", result: "Atenção", sample: "32 un", inspector: "Equipe Q2" },
    { id: "INSP-8842", item: "Suporte hidráulico H90", result: "Aprovado", sample: "25 un", inspector: "Equipe Q1" }
  ],
  nonConformities: [
    { id: "NC-7782", origin: "Produção", severity: "Alta", status: "Bloqueado", owner: "Qualidade" },
    { id: "NC-7783", origin: "Fornecedor", severity: "Média", status: "Análise", owner: "Compras" },
    { id: "NC-7784", origin: "Cliente", severity: "Baixa", status: "Plano de ação", owner: "Comercial" }
  ],
  certifications: [
    { name: "ISO 9001", compliance: 96 },
    { name: "IATF 16949", compliance: 88 },
    { name: "Auditoria 5S", compliance: 91 }
  ]
};

export const fiscal = {
  invoices: [
    { id: "NF-55204", partner: "Aços Paulista", type: "Entrada", amount: 221800, status: "Escriturada" },
    { id: "NF-55205", partner: "Atlas Máquinas", type: "Saída", amount: 426000, status: "Autorizada" },
    { id: "NF-55206", partner: "Vale Norte", type: "Saída", amount: 782000, status: "Aguardando SEFAZ" }
  ],
  taxes: [
    { name: "ICMS", base: 1840000, due: "20/05/2026", status: "Apurado" },
    { name: "IPI", base: 612000, due: "25/05/2026", status: "Conferência" },
    { name: "PIS/COFINS", base: 2050000, due: "23/05/2026", status: "Apurado" }
  ],
  costCenters: [
    { name: "Produção CNC", budget: 880000, consumed: 72 },
    { name: "Manutenção", budget: 240000, consumed: 61 },
    { name: "Logística", budget: 310000, consumed: 68 }
  ]
};

export const projects = {
  portfolio: [
    { id: "PRJ-2040", name: "Nova célula CNC", phase: "Execução", budget: 1480000, progress: 58 },
    { id: "PRJ-2041", name: "WMS com RFID", phase: "Homologação", budget: 620000, progress: 74 },
    { id: "PRJ-2042", name: "Eficiência energética", phase: "Planejamento", budget: 390000, progress: 22 }
  ],
  risks: [
    { id: "RSK-710", project: "Nova célula CNC", severity: "Média", status: "Mitigando", owner: "Engenharia" },
    { id: "RSK-711", project: "WMS com RFID", severity: "Alta", status: "Atraso fornecedor", owner: "TI" },
    { id: "RSK-712", project: "Eficiência energética", severity: "Baixa", status: "Monitorando", owner: "Facilities" }
  ]
};

export const auditTrail = [
  { time: "15:18", user: "Marina Lopes", action: "Atualizou progresso da OP-7811 para 76%" },
  { time: "14:55", user: "Sistema MRP", action: "Gerou sugestão de compra para MAT-1020" },
  { time: "14:21", user: "Bianca Costa", action: "Aprovou pagamento PAG-3319" },
  { time: "13:49", user: "Rafael Mendes", action: "Abriu OS-4401 para CNC-03" },
  { time: "13:12", user: "Service Desk", action: "Priorizou chamado TI-9022 para integração ERP-MRP" },
  { time: "12:44", user: "Qualidade", action: "Bloqueou NC-7782 para disposição técnica" }
];
