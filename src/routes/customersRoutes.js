import express, { Router } from 'express';
const router = express.Router();
import { getCustomers, registerCustomer } from '../controllers/customersControllers.js';

// Rota para listar os clientes
router.get('/', getCustomers);

// Rota para cadastrar um cliente
router.post('/', registerCustomer);

export default router;