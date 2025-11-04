CREATE TABLE sistema.agendamentos (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    submissao_id UUID REFERENCES sistema.submissoes(id),
    data_agendada TIMESTAMP NOT NULL CHECK (data_agendada > NOW()),
    local TEXT NOT NULL,
    criado_em TIMESTAMP DEFAULT NOW(),
    atualizado_em TIMESTAMP DEFAULT NOW()
);
