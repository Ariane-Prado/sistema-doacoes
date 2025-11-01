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