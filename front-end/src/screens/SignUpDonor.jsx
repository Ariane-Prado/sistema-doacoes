import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";
import LogoWelcome from "../assets/ImagemWELCOME.jpg";

const SignUpDonor = () => {
  const nav = useNavigate();
  const [form, setForm] = useState({
    nome: "",
    cpf: "",
    email: "",
    telefone: "",
    cep: "",
    cidade: "",
    estado: "",
    endereco: "",
    senha: "",
    confirmarSenha: "",
    aceito: false,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handle = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (form.senha !== form.confirmarSenha) {
      setError("As senhas não coincidem.");
      return;
    }
    if (!form.aceito) {
      setError("Você precisa aceitar os termos.");
      return;
    }
    setLoading(true);
    try {
      const base = import.meta.env.VITE_API_URL || "http://localhost:3333";
      const res = await fetch(`${base}/auth/register/donor`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Erro ao cadastrar.");
      alert("Conta criada! Você será redirecionado para o login.");
      nav("/");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-wrapper">
      <header className="header">
        <img src={LogoWelcome} alt="DoAção" />
        <div>
          <div className="brand">DoAção</div>
          <div className="tagline">Conectando solidariedade</div>
        </div>
      </header>
      <div className="card">
        <h1 className="title">Criar Conta</h1>
        <div className="toggle">
          <a href="/signup/donor" className="active">Sou Doador</a>
          <a href="/signup/ong">Sou ONG</a>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid">
            <div className="field">
              <label>Nome Completo *</label>
              <input name="nome" required onChange={handle} />
            </div>
            <div className="field">
              <label>CPF *</label>
              <input name="cpf" required onChange={handle} />
            </div>
            <div className="field">
              <label>E-mail *</label>
              <input type="email" name="email" required onChange={handle} />
            </div>
            <div className="field">
              <label>Telefone *</label>
              <input name="telefone" required onChange={handle} />
            </div>
            <div className="field">
              <label>CEP</label>
              <input name="cep" onChange={handle} />
            </div>
            <div className="field">
              <label>Cidade</label>
              <input name="cidade" onChange={handle} />
            </div>
            <div className="field">
              <label>Estado (UF)</label>
              <input name="estado" maxLength={2} onChange={handle} />
            </div>
            <div className="field full">
              <label>Endereço Completo</label>
              <input name="endereco" onChange={handle} />
            </div>
            <div className="field">
              <label>Senha *</label>
              <input type="password" name="senha" minLength={8} required onChange={handle} />
              <small>Mínimo 8 caracteres</small>
            </div>
            <div className="field">
              <label>Confirmar Senha *</label>
              <input type="password" name="confirmarSenha" required onChange={handle} />
            </div>
          </div>
          <div className="field full">
            <label>
              <input type="checkbox" name="aceito" onChange={handle} required />
              Li e aceito os termos de uso e política de privacidade
            </label>
          </div>
          {error && <p className="error">{error}</p>}
          <div className="actions">
            <button type="submit" disabled={loading}>
              {loading ? "Criando..." : "Criar Conta como Doador"}
            </button>
          </div>
          <div className="foot">
            <a href="/">Já tem uma conta? Fazer login</a>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SignUpDonor;