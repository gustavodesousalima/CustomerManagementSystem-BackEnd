import CustomerModel from '../models/customersModel.js';

export const getCustomers = async (req, res) => {
  try {
    const customers = await CustomerModel.getCustomers();
    res.status(200).json(customers);
  } catch (error) {
    console.error('Erro ao buscar clientes: ', error);
    res.status(500).json('Erro interno no servidor');
  }
};

export const registerCustomer = async (req, res) => {
  const { name, email, telephone } = req.body;
  try {
    const newCustomer = await CustomerModel.registerCustomer(name, email, telephone);
    res.status(200).json(newCustomer);
  } catch (error) {
    console.error('Erro ao cadastrar cliente: ', error);
    res.status(500).json('Erro interno no servidor');
  }
};
