export function login(req, res) {
  const { email, senha } = req.body;

  // Verifica se vieram os campos
  if (!email || !senha) {
    return res.status(400).json({ message: "E-mail e senha são obrigatórios." });
  }

  // Mock — login de teste
  if (email === "teste@teste.com" && senha === "123456") {
    return res.status(200).json({
      usuario: {
        id: 1,
        nome: "Usuário Teste",
        email,
      },
      token: "token-falso-123",
    });
  }

  // Se for diferente
  return res.status(401).json({ message: "Credenciais inválidas." });
}
