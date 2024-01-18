import express from 'express';
import { getCustomers, registerCustomer, calculateRoute } from '../controllers/customersControllers.js';

const router = express.Router();

// Rota para listar os clientes
router.get('/getscustomers', getCustomers);

// Rota para cadastrar um cliente
router.post('/registercustomer', registerCustomer);

// Nova rota para calcular a rota mais curta
router.get('/calculaterouter', calculateRoute);

export default router;
