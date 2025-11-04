CREATE TYPE tipo_perfil AS ENUM ('admin', 'ong', 'doador');
CREATE TYPE status_item AS ENUM ('disponivel', 'em_analise', 'doado', 'recusado');
CREATE TYPE status_submissao AS ENUM ('pendente', 'aceito', 'recusado');
CREATE TYPE canal_notificacao AS ENUM ('email', 'in_app');