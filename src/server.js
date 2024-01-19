import express from 'express';
import bodyParser from 'body-parser';
import customersRoutes from './routes/customersRoutes.js';
import cors from 'cors';

const app = express();
const PORT = 5001;

// Middleware CORS
app.use(cors());

// Middleware para processar dados JSON
app.use(bodyParser.json());

// Conecta as rotas
app.use('/clients', customersRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}/clients/`);
});
