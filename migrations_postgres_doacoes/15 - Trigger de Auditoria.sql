CREATE TRIGGER trg_log_usuarios
AFTER INSERT OR UPDATE OR DELETE ON sistema.usuarios
FOR EACH ROW EXECUTE FUNCTION auditoria.registrar_log();