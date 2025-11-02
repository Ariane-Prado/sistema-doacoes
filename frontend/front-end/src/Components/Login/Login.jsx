import {FaUser, FaLock} from "react-icons/fa";
import { useState } from "react";
import "./Login.css";
<img src="/ImagemWELCOME.jpg" alt="Logo DoAção" className="logo" />






const Login = () => {

const[username, setUsername] = useState("");
const[password, setPassword] = useState("");

    const handleSubmit = (event) =>{
        event.preventDefault();
        
        alert("Enviando os dados:" + username + " - " + password);
    };

  return (
    <div className="container">
        <form onSubmit={handleSubmit}>
            <div className="logo-container">
                <img src="/ImagemWELCOME.jpg" alt="Logo DoAção" className="logo" />
            </div>

            <h1>Welcome to DoAção</h1>
            <p className="subtitle">Sign in to continue</p>

            <div className="input-field">
                <input type="email" 
                placeholder="you@example.com" 
                onChange={(e) => setUsername(e.target.value)}
                required
                />
                <FaUser className="icon" />
            </div>
            
            <div className="input-field">
                <input type="password" 
                placeholder="Senha" 
                onChange={(e) => setPassword(e.target.value)}
                required
                />
                <FaLock className="icon" />
            </div>

            <button>Sign in</button>

            <div className="recall-forget">
            <a href="#">Forgot password?</a>
            Need an account?<a href="#"> Sign Up</a>
            </div>

           

           
        </form>
    </div>
  )
}

export default Login
