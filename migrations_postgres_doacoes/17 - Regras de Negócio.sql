
CREATE OR REPLACE FUNCTION sistema.verifica_foto_obrigatoria()
RETURNS trigger AS $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM sistema.fotos_itens WHERE item_id = NEW.id
    ) THEN
        RAISE EXCEPTION 'Não é permitido criar ou atualizar item sem foto vinculada';
    END IF;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;


CREATE TRIGGER trg_foto_obrigatoria
AFTER INSERT OR UPDATE ON sistema.itens
FOR EACH ROW
EXECUTE FUNCTION sistema.verifica_foto_obrigatoria();
