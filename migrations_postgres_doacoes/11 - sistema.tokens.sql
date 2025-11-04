CREATE TABLE sistema.tokens (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    usuario_id UUID REFERENCES sistema.usuarios(id),
    token TEXT UNIQUE NOT NULL,
    criado_em TIMESTAMP DEFAULT NOW(),
    expira_em TIMESTAMP NOT NULL
);