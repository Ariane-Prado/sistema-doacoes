import {FaUser, FaLock} from "react-icons/fa";
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { useState } from "react";
import "./Login.css";
import LogoWelcome from "../assets/ImagemWELCOME.jpg";


const Login = () => {
  // Estados controlados – DEVEM ficar dentro do componente
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMsg("");
    setIsLoading(true);

    try {
      const baseURL = import.meta.env.VITE_API_URL || "http://localhost:3333";
      const resp = await fetch(`${baseURL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha }),
      });

      if (!resp.ok) {
        let message = "Erro ao entrar. Tente novamente.";
        try {
          const data = await resp.json();
          if (data?.message) message = data.message;
        } catch 
        {
            // ignora erro de parse do JSON
        }
        throw new Error(message);
      }

      const data = await resp.json();
      // guarda sessão (se quiser usar depois)
      localStorage.setItem("token", data.token);
      localStorage.setItem("usuario", JSON.stringify(data.usuario));

      alert(`Bem-vinda, ${data.usuario.nome}!`);
      // aqui depois você pode usar navigate("/dashboard")
    } catch (err) {
      setErrorMsg(err.message || "Erro ao entrar.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="logo-container">
          {/* A IMAGEM deve ficar DENTRO do componente, aqui no JSX */}
          <img src={LogoWelcome} alt="Logo DoAção" className="logo" />
        </div>

        <h1>Welcome to DoAção</h1>
        <p className="subtitle">Sign in to continue</p>

        {errorMsg && <p className="error">{errorMsg}</p>}

        <div className="input-field">
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <FaUser className="icon" />
        </div>

        <div className="input-field">
          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
          <FaLock className="icon" />
        </div>

        <button type="submit" disabled={isLoading || !email || !senha}>
          {isLoading ? "Entrando..." : "Sign in"}
        </button>

        <div className="recall-forget">
          <a href="#">Forgot password?</a>
          Need an account?<a href="#"> Sign Up</a>
        </div>
      </form>
      </div>
    </div>
  );
};

export default Login;

// Mount when used as entry (index.html points to this file)
const mountPoint = document.getElementById("root");
if (mountPoint) {
  createRoot(mountPoint).render(
    <StrictMode>
      <Login />
    </StrictMode>
  );
}
