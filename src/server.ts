import express from 'express';
import userRoutes from './routes/userRoutes';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json()); // Middleware para JSON
app.use('/api/users', userRoutes); // Rotas de usuários

app.listen(process.env.PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
