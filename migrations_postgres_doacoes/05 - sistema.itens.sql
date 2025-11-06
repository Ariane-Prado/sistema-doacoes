CREATE TABLE sistema.itens (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    usuario_id UUID REFERENCES sistema.usuarios(id) ON DELETE CASCADE,
    titulo VARCHAR(100) NOT NULL,
    categoria VARCHAR(50) NOT NULL,
    estado_conservacao VARCHAR(30) NOT NULL,
    descricao TEXT,
    cep VARCHAR(9),
    endereco TEXT,
    status status_item DEFAULT 'disponivel',
    data_criacao TIMESTAMP DEFAULT NOW(),
    data_atualizacao TIMESTAMP DEFAULT NOW()
);