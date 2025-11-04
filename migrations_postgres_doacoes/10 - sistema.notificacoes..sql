CREATE TABLE sistema.notificacoes (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    usuario_id UUID REFERENCES sistema.usuarios(id) ON DELETE CASCADE,
    tipo_evento VARCHAR(50),
    canal canal_notificacao NOT NULL,
    mensagem TEXT,
    lido BOOLEAN DEFAULT FALSE,
    criado_em TIMESTAMP DEFAULT NOW()
);