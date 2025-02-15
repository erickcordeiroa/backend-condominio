import express from 'express';

import dotenv from 'dotenv';
import router from './routes/router';
import cors from 'cors';

dotenv.config();

const app = express();


const corsOptions = {
  origin: process.env.FRONTEND_URL,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

app.use(express.json());
app.use('/api/v1/', router);
app.use('/uploads', express.static('uploads'));

app.listen(process.env.PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${process.env.PORT}`);
});
