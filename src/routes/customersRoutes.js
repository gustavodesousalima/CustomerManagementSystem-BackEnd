import express from 'express';
import { getCustomers, registerCustomer, calculateRoute } from '../controllers/customersControllers.js';

const router = express.Router();

// Rota para listar os clientes
router.get('/get', getCustomers);

// Rota para cadastrar um cliente
router.post('/post', registerCustomer);

// Nova rota para calcular a rota mais curta
router.get('/calculate', calculateRoute);

export default router;