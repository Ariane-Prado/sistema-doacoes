import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Rota de teste no postman
app.use("/auth", authRoutes);


// Rota de teste
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// Porta
const PORT = process.env.PORT || 3333;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
