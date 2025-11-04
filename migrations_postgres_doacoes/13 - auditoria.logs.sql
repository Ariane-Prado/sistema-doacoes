CREATE TABLE auditoria.logs (
    id SERIAL PRIMARY KEY,
    tabela TEXT,
    acao TEXT,
    registro_id UUID,
    usuario_id UUID,
    ip TEXT,
    data_evento TIMESTAMP DEFAULT NOW()
);