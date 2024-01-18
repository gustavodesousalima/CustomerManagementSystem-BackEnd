import express from 'express';
import bodyParser from 'body-parser';
import customersRoutes from './routes/customersRoutes.js';

const app = express();
const PORT = 5001;

app.use(bodyParser.json());

// Conecta as rotas
app.use('/clientes', customersRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
