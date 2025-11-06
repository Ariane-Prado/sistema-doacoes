CREATE TABLE sistema.mensagens_chat (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    chat_id UUID REFERENCES sistema.chats(id) ON DELETE CASCADE,
    remetente_id UUID REFERENCES sistema.usuarios(id),
    conteudo TEXT NOT NULL,
    anexo TEXT,
    enviado_em TIMESTAMP DEFAULT NOW()
);
