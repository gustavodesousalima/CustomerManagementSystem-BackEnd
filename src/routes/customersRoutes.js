import express, { Router } from 'express';
const router = express.Router();
import { getCustomers, registerCustomer } from '../controllers/customersControllers';

// Rota para listar os clientes
router.get('/', listarClientes);

// Rota para cadastrar um cliente
router.post('/', cadastrarCliente);

export default Router;