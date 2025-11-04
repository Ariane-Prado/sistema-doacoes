CREATE OR REPLACE FUNCTION auditoria.registrar_log() RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO auditoria.logs (tabela, acao, registro_id, usuario_id)
  VALUES (TG_TABLE_NAME, TG_OP, NEW.id, NULL);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;