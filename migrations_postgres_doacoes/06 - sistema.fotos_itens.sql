CREATE TABLE sistema.fotos_itens (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    item_id UUID REFERENCES sistema.itens(id) ON DELETE CASCADE,
    url TEXT NOT NULL,
    legenda TEXT,
    tamanho_bytes INT CHECK (tamanho_bytes <= 5 * 1024 * 1024),
    data_upload TIMESTAMP DEFAULT NOW()
);