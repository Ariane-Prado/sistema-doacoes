INSERT INTO sistema.usuarios (nome, email, senha, perfil)
VALUES ('Antonio Tonin', 'antonio.t.neto@academico.unirv.edu.br', crypt('Unirv12', gen_salt('bf')), 'admin');
