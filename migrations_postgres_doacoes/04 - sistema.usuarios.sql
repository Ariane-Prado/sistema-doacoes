CREATE TABLE sistema.usuarios (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    nome VARCHAR(120) NOT NULL,
    email VARCHAR(120) UNIQUE NOT NULL,
    senha TEXT NOT NULL,
    perfil tipo_perfil NOT NULL,
    cpf_cnpj VARCHAR(18),
    telefone VARCHAR(20),
    cep VARCHAR(9),
    endereco TEXT,
    ativo BOOLEAN DEFAULT TRUE,
    data_criacao TIMESTAMP DEFAULT NOW(),
    data_atualizacao TIMESTAMP DEFAULT NOW()
);