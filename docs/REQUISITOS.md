# 📋 Documento de Requisitos Funcionais – Sistema de Doações

--

## RF01 — Gestão de Usuários e Acesso

**Descrição:**  
Permitir o cadastro, autenticação, manutenção de perfis e controle de acesso dos usuários do sistema (Doador, ONG e Administrador). Inclui criação de conta, confirmação de e-mail, login, recuperação de senha e edição de perfil.

**Dados obrigatórios:**  
Nome, E-mail, Senha, Perfil (doador/ong/admin), Aceite de termos, CPF/CNPJ conforme tipo, Endereço (para doador), Categorias (para ONG).

**Prioridade:** Alta  
**Dependências:** Nenhuma  
**Conflitos:** Nenhum  
**Material de Apoio:** Protótipo das telas `/signup`, `/login`, `/perfil/setup`.

**História do Usuário:**  
Como pessoa interessada em usar a plataforma, quero criar uma conta e definir meu papel (doador ou ONG), para poder doar ou receber doações de forma segura.  
Como administrador, quero poder gerenciar usuários, atribuir perfis, bloquear e aprovar cadastros de ONG, garantindo a integridade do sistema.

**Entrada de dados:**  
Campos: nome, e-mail, senha, perfil, aceite de termos, telefone, CEP, endereço, CNPJ, razão social, categorias.  
Tipo: texto, e-mail, senha, enum, boolean.

**Validações (cenários):**  
- Dado que informo um e-mail já cadastrado, quando salvo, então o sistema bloqueia e exibe “E-mail já em uso”.  
- Dado que escolho ONG e não informo CNPJ, quando salvo, então o sistema exige o campo.  
- Dado que não aceito os termos, quando clico em “Criar conta”, então o botão permanece desabilitado.  
- Dado que sou admin e defino um novo perfil, quando salvo, então o usuário recebe um convite de acesso.  
- Dado que um usuário esqueceu a senha, quando solicita redefinição, então o sistema envia e-mail com token de 30 minutos.

**Saída esperada:**  
Conta criada com status: `pendente_confirmacao`, `ativa` (doador) ou `pendente_validacao` (ONG).  
Usuário autenticado e redirecionado conforme perfil.

---

## RF02 — Cadastro e Gerenciamento de Itens

**Descrição:**  
Permitir que o Doador cadastre, consulte, edite e exclua itens que deseja doar, informando título, categoria, estado de conservação, descrição, endereço e fotos.

**Dados obrigatórios:**  
Título, Categoria, Estado de Conservação, Endereço, ao menos 1 Foto.

**Prioridade:** Alta  
**Dependências:** RF01  
**Conflitos:** Itens em análise não podem ser editados.  
**Material de Apoio:** Protótipo da tela `/meus-itens`.

**História do Usuário:**  
Como Doador, quero cadastrar e gerenciar os itens que pretendo doar, com fotos e descrição, para que as ONGs possam analisá-los com clareza.

**Entrada de dados:**  
Título (texto), Categoria (enum), Estado de Conservação (enum), Descrição (texto), CEP/Endereço (texto), Fotos (imagem).

**Validações (cenários):**  
- Dado que o item não possui fotos, quando tento salvar, então o sistema bloqueia e exibe “Adicione ao menos uma foto”.  
- Dado que informo CEP inválido, quando clico “Buscar endereço”, então o sistema exibe mensagem de erro.  
- Dado que o item está “Em análise”, quando tento editá-lo, então o sistema impede a alteração.

**Saída esperada:**  
Item registrado com status `rascunho` ou `em análise`, armazenando todos os dados e imagens associadas.

---

## RF03 — Gerenciamento de Fotos de Itens

**Descrição:**  
Permitir anexar, visualizar, editar e remover fotos vinculadas a cada item cadastrado.

**Dados obrigatórios:**  
Arquivo de imagem válido (`.jpg` ou `.png`, até 5MB).

**Prioridade:** Média  
**Dependências:** RF02  
**Conflitos:** Bloqueado para itens “Em análise”.  
**Material de Apoio:** Galeria do item e modal de upload.

**História do Usuário:**  
Como Doador, quero enviar fotos dos itens para que as ONGs possam avaliar a condição real dos produtos que estou doando.

**Entrada de dados:**  
Arquivo de imagem, legenda opcional.

**Validações (cenários):**  
- Dado que envio uma imagem com tamanho maior que 5MB, quando tento anexar, então o sistema exibe erro.  
- Dado que o item está “Em análise”, quando tento excluir uma foto, então o botão de remoção fica desabilitado.

**Saída esperada:**  
Galeria de imagens atualizada, exibindo miniaturas e nomes de arquivos.

---

## RF04 — Submissão de Itens para ONGs

**Descrição:**  
Permitir que o Doador envie um item cadastrado a uma ONG específica para análise e aceite.

**Dados obrigatórios:**  
Item, ONG destino, Mensagem opcional.

**Prioridade:** Alta  
**Dependências:** RF02  
**Conflitos:** Envio duplicado enquanto “Em análise”.  
**Material de Apoio:** Tela de submissão com lista de ONGs.

**História do Usuário:**  
Como Doador, quero escolher uma ONG e enviar meu item para que ela avalie se aceita a doação.

**Entrada de dados:**  
Item_id (referência), ONG_id (referência), mensagem (texto).

**Validações (cenários):**  
- Dado que o item não tem foto, quando tento submeter, então o sistema bloqueia o envio.  
- Dado que o item já está “Em análise”, quando tento enviar novamente, então o sistema mostra mensagem de bloqueio.  
- Dado que a ONG já recusou o item antes, quando tento reenviar, então o sistema exibe aviso “ONG já recusou este item”.

**Saída esperada:**  
Registro de submissão criado com status `Em análise`.

---

## RF05 — Decisão da ONG sobre Submissões

**Descrição:**  
Permitir que a ONG avalie as submissões e registre uma decisão única por item (aceitar ou recusar).

**Dados obrigatórios:**  
Submissão, Decisão, Justificativa (se recusar).

**Prioridade:** Alta  
**Dependências:** RF04  
**Conflitos:** Decisão não pode ser alterada após registrada.  
**Material de Apoio:** Tela de submissões recebidas.

**História do Usuário:**  
Como ONG, quero ver os itens enviados e decidir se aceito ou recuso, deixando uma justificativa quando necessário.

**Entrada de dados:**  
Submissão_id, Decisão (enum), Justificativa (texto).

**Validações (cenários):**  
- Dado que já registrei uma decisão, quando tento decidir novamente, então o sistema bloqueia.  
- Dado que recuso o item sem justificativa, quando salvo, então o sistema exige preenchimento.  
- Dado que aceito o item, quando salvo, então o status muda para “Aceito” e gera log na auditoria.

**Saída esperada:**  
Submissão atualizada com decisão e registro de auditoria.

---

## RF06 — Histórico e Acompanhamento de Submissões

**Descrição:**  
Permitir que Doador e ONG acompanhem o histórico de submissões, com filtros e status atualizados.

**Dados obrigatórios:**  
Item, ONG, Data, Status.

**Prioridade:** Média  
**Dependências:** RF04, RF05  
**Conflitos:** Nenhum  
**Material de Apoio:** Painel de histórico com filtros.

**História do Usuário:**  
Como Doador, quero acompanhar o status das minhas doações.  
Como ONG, quero consultar o histórico das solicitações recebidas e suas decisões.

**Entrada de dados:**  
Filtros por categoria, status e período.

**Validações (cenários):**  
- Dado que aplico filtro inválido, quando busco, então o sistema exibe lista vazia.  
- Dado que não há submissões, quando acesso o histórico, então o sistema mostra “Nenhuma doação registrada”.

**Saída esperada:**  
Lista de submissões com status e justificativas.

---
## RF07 — Chat entre Doador e ONG (Evolutivo)

*Descrição:*  
Permitir troca de mensagens entre Doador e ONG vinculada à doação.

*Dados obrigatórios:*  
Mensagem (texto), Doação (referência).

*Prioridade:* Média  
*Dependências:* RF04  
*Conflitos:* Chat bloqueado se doação cancelada.  
*Material de Apoio:* Tela de chat com histórico.

*História do Usuário:*  
Como Doador ou ONG, quero conversar sobre detalhes da doação para combinar retirada, condições e dúvidas.

*Entrada de dados:*  
Mensagem (texto 1–1000), Anexo (imagem opcional).

*Validações (cenários):*  
- Dado que envio mensagem vazia, quando clico em enviar, então o sistema bloqueia o botão.  
- Dado que anexo arquivo maior que 5MB, quando envio, então o sistema exibe erro.

*Saída esperada:*  
Mensagem registrada e exibida no histórico do chat.

---

## RF08 — Notificações e Alertas

*Descrição:*  
Gerar notificações automáticas e in-app para eventos relevantes do sistema (submissão, decisão, mensagens, agendamentos).

*Dados obrigatórios:*  
Usuário destino, Tipo de evento, Canal (in-app/e-mail).

*Prioridade:* Alta  
*Dependências:* RF01, RF04, RF05  
*Conflitos:* Preferência do usuário pode restringir canal.  
*Material de Apoio:* Ícone de sino e painel de notificações.

*História do Usuário:*  
Como usuário, quero ser notificado sobre atualizações de minhas doações ou itens, para acompanhar tudo em tempo real.

*Entrada de dados:*  
Evento (enum), destinatário (id), mensagem (texto).

*Validações (cenários):*  
- Dado que o usuário desativou e-mails, quando ocorre evento, então só notificação in-app é criada.  
- Dado que ocorre falha no envio, quando reprocesso, então o sistema registra novo log.

*Saída esperada:*  
Lista de notificações e e-mails enviados conforme preferências.

---

## RF09 — Auditoria de Decisões e Ações

*Descrição:*  
Registrar logs de todas as ações críticas (cadastro, bloqueio, decisão, exclusão), com horário, autor e IP.

*Dados obrigatórios:*  
Usuário, Ação, Timestamp, IP.

*Prioridade:* Alta  
*Dependências:* RF01, RF05  
*Conflitos:* Nenhum  
*Material de Apoio:* Painel administrativo de auditoria.

*História do Usuário:*  
Como administrador, quero visualizar registros de todas as ações relevantes para garantir rastreabilidade e transparência.

*Entrada de dados:*  
Filtros (usuário, ação, período).

*Validações (cenários):*  
- Dado que aplico filtros inválidos, quando pesquiso, então o sistema exibe lista vazia.  
- Dado que tento editar um log, quando clico em salvar, então a operação é bloqueada (somente leitura).

*Saída esperada:*  
Tabela de logs exportável em CSV.

---

## RF10 — Agendamento de Retirada/Entrega

*Descrição:*  
Permitir que a ONG agende a retirada de um item aceito, definindo data, hora e local.

*Dados obrigatórios:*  
Doação, Data, Local.

*Prioridade:* Média  
*Dependências:* RF05  
*Conflitos:* Proibido agendar datas passadas.  
*Material de Apoio:* Tela de agendamento.

*História do Usuário:*  
Como ONG, quero agendar a retirada de um item aceito para organizar a logística e cumprir prazos com o doador.

*Entrada de dados:*  
Doação_id, DataHora, Local (texto).

*Validações (cenários):*  
- Dado que a data selecionada é passada, quando salvo, então o sistema mostra “Data inválida”.  
- Dado que o item não está aceito, quando tento agendar, então o sistema bloqueia a operação.

*Saída esperada:*  
Agendamento criado com status agendado.

---

## RF11 — Busca e Filtros

*Descrição:*  
Permitir busca de ONGs e Itens com base em texto, categoria, cidade e status.

*Dados obrigatórios:*  
Termo, Categoria, Cidade/UF (opcionais).

*Prioridade:* Média  
*Dependências:* RF01, RF02, RF05  
*Conflitos:* Nenhum  
*Material de Apoio:* Barra de busca e chips de filtros.

*História do Usuário:*  
Como usuário, quero encontrar ONGs ou doações filtrando por tipo e localização.

*Entrada de dados:*  
Campos de busca e filtros (texto e enum).

*Validações (cenários):*  
- Dado que não há resultados, quando busco, então o sistema exibe mensagem “Nada encontrado”.  
- Dado que limpo os filtros, quando pesquiso, então a lista recarrega todos os itens.

*Saída esperada:*  
Lista paginada de resultados conforme os filtros aplicados.

---

## RF12 — Relatórios e Métricas

*Descrição:*  
Gerar relatórios e dashboards com informações consolidadas sobre doações e decisões.

*Dados obrigatórios:*  
Período, Categoria, ONG.

*Prioridade:* Média  
*Dependências:* RF05, RF09  
*Conflitos:* Nenhum  
*Material de Apoio:* Painel de relatórios.

*História do Usuário:*  
Como administrador ou ONG, quero visualizar estatísticas de doações e desempenho (taxas de aceitação, tempo médio de decisão).

*Entrada de dados:*  
Filtros (data inicial, data final, entidade).

*Validações (cenários):*  
- Dado que o período é superior a 12 meses, quando gero o relatório, então o sistema exibe alerta de lentidão.  
- Dado que não há dados no intervalo, quando gero, então o gráfico exibe mensagem de ausência de dados.

*Saída esperada:*  
Gráficos e tabelas de desempenho, exportáveis em CSV.

---

## RF13 — Recuperação de Senha

*Descrição:*  
Permitir redefinição de senha via e-mail, com token temporário.

*Dados obrigatórios:*  
E-mail, Nova senha, Token.

*Prioridade:* Alta  
*Dependências:* RF01  
*Conflitos:* Nenhum  
*Material de Apoio:* Tela “Esqueci minha senha”.

*História do Usuário:*  
Como usuário, quero recuperar minha senha caso esqueça, de forma segura e rápida.

*Entrada de dados:*  
E-mail (texto), Nova senha (senha).

*Validações (cenários):*  
- Dado que o e-mail não existe, quando solicito recuperação, então o sistema responde silenciosamente.  
- Dado que o token expirou, quando tento redefinir, então o sistema exibe “Link expirado”.

*Saída esperada:*  
Senha atualizada e acesso liberado.

---

## RF14 — Termos de Uso e Política de Privacidade

*Descrição:*  
Garantir que o usuário aceite os termos antes de utilizar o sistema, armazenando data, IP e versão do documento.

*Dados obrigatórios:*  
Aceite de termos, Data, IP, Versão.

*Prioridade:* Alta  
*Dependências:* RF01  
*Conflitos:* Nenhum  
*Material de Apoio:* Modal de aceite no primeiro login.

*História do Usuário:*  
Como usuário, quero aceitar os termos de uso para utilizar o sistema de forma segura e conforme a política de privacidade.

*Entrada de dados:*  
Checkbox de aceite (boolean).

*Validações (cenários):*  
- Dado que não aceito os termos, quando tento continuar, então o sistema bloqueia o acesso.  
- Dado que aceito, quando salvo, então o registro é gravado com data e IP.

*Saída esperada:*  
Consentimento registrado e acesso liberado.

---

# ⚖️ Regras de Negócio

| Código | Nome | Descrição |
|---|---|---|
| RN01 | Exclusividade da Submissão | Cada item só pode ser submetido a uma ONG por vez. |
| RN02 | Reenvio de Itens Recusados | Itens recusados podem ser reenviados, mas não para a mesma ONG. |
| RN03 | Foto Obrigatória | Todo item deve ter pelo menos uma foto válida. |
| RN04 | Decisão Única | Cada submissão deve ter apenas uma decisão registrada (aceitar/recusar). |