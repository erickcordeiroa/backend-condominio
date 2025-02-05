import express from 'express';

import dotenv from 'dotenv';
import router from './routes/router';

dotenv.config();

const app = express();

app.use(express.json());
app.use('/api/v1/', router);

app.listen(process.env.PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${process.env.PORT}`);
});
