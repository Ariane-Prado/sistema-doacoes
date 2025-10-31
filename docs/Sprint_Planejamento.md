# 🗓️ **Planejamento Geral — Projeto Sistema de Doações**

## 🎯 **Visão Geral**
O projeto será desenvolvido em **4 sprints semanais**, totalizando **1 mês de execução**.  
Cada sprint possui entregas específicas, responsáveis definidos e critérios de aceitação claros.  
O fluxo de versionamento segue o modelo **feature → develop → main**, com **Pull Requests obrigatórios**.

---

## 🧩 **Sprint 1 — Estrutura e Documentação Inicial**
📅 **Período:** 01/11 a 07/11  
🎯 **Objetivo:** Criar e estruturar o repositório, definir regras de versionamento e subir a documentação base do projeto.

### **Entregas**
| Código | Entrega | Descrição | Responsáveis | Branch | Status |
|--------|----------|------------|---------------|---------|---------|
| DOC01 | Requisitos e Regras de Negócio | Documento com RFs, RNFs e histórias de usuário | Fernanda, Carlos | `feature/docs-requisitos` | ⏳ |
| DOC02 | Estrutura de Repositório | Criação de pastas principais e `.gitignore` | Ariane, Carlos | `feature/estrutura-inicial` | ⏳ |
| DOC03 | Protótipo de Telas | Protótipo do fluxo doador/ONG | Fernanda | `feature/docs-prototipo` | ⏳ |
| DOC04 | Guia de Versionamento e Clone | Instruções de Pull Request e configuração inicial | Ariane | `feature/docs-planejamento-sprints` | ✅ |
| DOC05 | Planejamento das Sprints | Cronograma e responsabilidades | Ariane, Vilela | `feature/docs-planejamento-sprints` | ✅ |

---

## ⚙️ **Sprint 2 — Implementação de Cadastros e Login**
📅 **Período:** 08/11 a 14/11  
🎯 **Objetivo:** Implementar os módulos de **Usuário e ONG**, com login e autenticação básica.

### **Entregas**
| Código | Entrega | Descrição | Responsáveis | Branch | Status |
|--------|----------|------------|---------------|---------|---------|
| RF01 | Cadastro de Usuário | CRUD de usuários com autenticação | Ariane, Carlos | `feature/backend-usuario` | ⏳ |
| RF02 | Cadastro de ONGs | CRUD com validação de CNPJ | Antonio, Gabriel Rosa | `feature/backend-ong` | ⏳ |
| RF03 | Banco de Dados Inicial | Estrutura SQL de usuários e ONGs | Antonio, Gabriel Rosa | `feature/database-inicial` | ⏳ |
| RF04 | Tela de Login e Cadastro | Interfaces conectadas ao backend | Juan, Rafaell, Fernanda | `feature/frontend-login-cadastro` | ⏳ |

---

## 💬 **Sprint 3 — Módulo de Itens e Submissão**
📅 **Período:** 15/11 a 21/11  
🎯 **Objetivo:** Implementar o cadastro de itens, upload de fotos e submissão para análise das ONGs.

### **Entregas**
| Código | Entrega | Descrição | Responsáveis | Branch | Status |
|--------|----------|------------|---------------|---------|---------|
| RF05 | CRUD de Itens | Cadastro e edição de itens com fotos | Ariane, Carlos | `feature/backend-itens` | ⏳ |
| RF06 | Upload de Fotos | Upload, visualização e exclusão | Carlos, Vilela | `feature/backend-fotos` | ⏳ |
| RF07 | Submissão de Itens | Fluxo de envio para ONGs | Juan, Rafaell | `feature/frontend-submissao` | ⏳ |
| RF08 | Interface de Análise | Tela para ONGs aceitarem ou recusarem | Fernanda | `feature/frontend-analise` | ⏳ |

---

## 🔗 **Sprint 4 — Integração e Entrega Final**
📅 **Período:** 22/11 a 28/11  
🎯 **Objetivo:** Integrar todos os módulos, testar o sistema e gerar o relatório final.

### **Entregas**
| Código | Entrega | Descrição | Responsáveis | Branch | Status |
|--------|----------|------------|---------------|---------|---------|
| RF09 | Integração Final | Comunicação entre front, back e banco | Ariane, Antonio | `feature/integracao-final` | ⏳ |
| RF10 | Chat por Doação | Canal de conversa doador ↔ ONG | Carlos, Vilela | `feature/backend-chat` | ⏳ |
| RF11 | Relatório de Auditoria | Registro das decisões das ONGs | Gabriel Rosa | `feature/backend-auditoria` | ⏳ |
| RF12 | Testes e Deploy Local | Teste completo e validação final | Todos | `release/v1.0` | ⏳ |
| DOC08 | Relatório Final | Consolidado da execução e resultados | Ariane, Vilela | `feature/docs-relatorio-final` | ⏳ |

---

## 🧭 **Critérios de Conclusão**
Uma sprint será considerada **concluída** quando:
1. Todas as tarefas da sprint estiverem versionadas na branch `develop`;
2. Todos os PRs forem revisados e aprovados;
3. O relatório da sprint estiver adicionado em `docs/`;
4. As issues forem fechadas no GitHub.

---

## 🧠 **Responsabilidades Gerais**
| Função | Integrantes | Responsabilidades |
|---------|--------------|-------------------|
| **Gerência de Projeto** | Ariane, Vilela | Planejamento, cronograma e aprovação de PRs |
| **Front-End** | Juan, Rafaell, Fernanda | Interfaces e integração com o backend |
| **Back-End** | Ariane, Carlos, Vilela | APIs e lógica de negócio |
| **Banco de Dados** | Antonio, Gabriel Rosa | Estrutura, chaves e relacionamentos |
| **Documentação** | Ariane, Fernanda | Requisitos, relatórios e guias técnicos |

---

## 🔄 **Fluxo de Versionamento**
```bash
git checkout develop
git pull origin develop
git checkout -b feature/nome-da-tarefa
# faz alterações
git add .
git commit -m "feat: descrição breve da tarefa"
git push origin feature/nome-da-tarefa
# cria PR para develop
```

---

## ✅ **Encerramento do Projeto**
Ao final da **Sprint 4**, será gerado o **Relatório Final (DOC08)** contendo:
- Resultados alcançados;  
- Lições aprendidas;  
- Melhorias propostas para versões futuras.

---

📅 **Gerentes Responsáveis:** @Ariane, @Vilela  
🧠 **Controle de Sprints e Revisões:** via Issues e Pull Requests no GitHub.
