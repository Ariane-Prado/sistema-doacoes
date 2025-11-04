CREATE TABLE sistema.submissoes (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    item_id UUID REFERENCES sistema.itens(id) ON DELETE CASCADE,
    ong_id UUID REFERENCES sistema.usuarios(id),
    mensagem TEXT,
    status status_submissao DEFAULT 'pendente',
    data_envio TIMESTAMP DEFAULT NOW(),
    data_decisao TIMESTAMP,
    justificativa TEXT
);