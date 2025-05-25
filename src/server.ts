import express from 'express';

import dotenv from 'dotenv';
import router from './routes/router';
import cors from 'cors';

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());
app.use('/api/v1/', router);
app.use('/uploads', express.static('uploads'));

app.listen(3001, '0.0.0.0',() => {
  console.log(`🚀 Servidor rodando em http://localhost:${process.env.PORT}`);
});
