# ERP Industrial NexaForge

ERP industrial responsivo feito com Node.js puro, sem dependências externas. A aplicação inclui backend HTTP, APIs REST, painel web mobile-first e recursos de PWA para instalação no celular.

## Módulos

- Logística: expedições, docas, transportadoras e SLA.
- Financeiro: fluxo de caixa, contas a pagar e contas a receber.
- RH: colaboradores, turnos, headcount, ausências e treinamentos.
- Produção: ordens de produção, linhas, OEE e refugos.
- Estoque: materiais, saldos, pontos mínimos e movimentações.
- Manutenção: ordens de serviço, ativos, disponibilidade e MTTR.
- Gestão de TI: service desk, ativos, sistemas, SLA, acessos e segurança.
- Compras: requisições, cotações, pedidos, fornecedores e contratos.
- Comercial/CRM: clientes, oportunidades, propostas, pedidos e carteira.
- Qualidade: inspeções, não conformidades, certificados e planos de ação.
- Fiscal/Contábil: NF-e, impostos, apurações, centros de custo e contabilidade.
- Projetos: engenharia, CAPEX, cronograma, custos, marcos e riscos.

## Como rodar

Instale o Node.js 18 ou superior e execute:

```bash
npm start
```

Também funciona sem npm:

```bash
node src/server.js
```

Depois acesse:

```text
http://localhost:3000
```

## Preview sem Node.js

Se o Node.js ainda não estiver instalado, é possível abrir uma prévia local com PowerShell:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\preview.ps1
```

Esse modo serve a interface em `http://localhost:3000` e usa dados locais de demonstração no frontend. Para o ambiente definitivo, use o servidor Node.js.

## APIs principais

```text
GET  /api/health
GET  /api/summary
GET  /api/modules
GET  /api/modules/:moduleId
POST /api/modules/logistics/shipments
POST /api/modules/maintenance/work-orders
```

## Mobile e PWA

A interface é responsiva, possui navegação inferior para celular, menu lateral mobile, manifest e service worker. Ao abrir em um navegador móvel, o app pode ser instalado como aplicativo PWA.

## Próximos passos recomendados

- Persistir dados em PostgreSQL ou SQL Server.
- Adicionar autenticação por perfil: diretoria, financeiro, PCP, RH, almoxarifado e manutenção.
- Criar permissões por módulo e trilha de auditoria persistente.
- Integrar notas fiscais, boletos, MRP, apontamento de produção e coletores de estoque.
