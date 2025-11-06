CREATE TABLE sistema.chats (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    doador_id UUID REFERENCES sistema.usuarios(id),
    ong_id UUID REFERENCES sistema.usuarios(id),
    item_id UUID REFERENCES sistema.itens(id),
    ativo BOOLEAN DEFAULT TRUE,
    criado_em TIMESTAMP DEFAULT NOW()
);
