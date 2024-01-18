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
  const { name, email, telephone, coord_x, coord_y } = req.body;

  try {
    const newCustomer = await CustomerModel.registerCustomer(name, email, telephone, coord_x, coord_y);
    res.status(200).json(newCustomer);

  } catch (error) {
    console.error('Erro ao cadastrar cliente: ', error);
    res.status(500).json('Erro interno no servidor');
  }
};

// Define o controlador calculateRoute
export const calculateRoute = async (req, res) => {
  try {
    // Busca todos os clientes do banco de dados
    const customers = await CustomerModel.getCustomers();

    // Mapeia cada cliente para um novo objeto que inclui a distância do cliente até a origem da empresa (0,0)
    const customersWithDistances = customers.map(customer => {
      // Extrai as coordenadas do cliente
      const coord_x = customer.coord_x;
      const coord_y = customer.coord_y;

      // Calcula a distância do cliente até a origem usando a fórmula da distância euclidiana
      const distance = Math.sqrt(coord_x ** 2 + coord_y ** 2);

      // Limita a distância a duas casas decimais
      const distanceLimited = distance.toFixed(2);

      // Retorna um novo objeto que é uma cópia do cliente, mas com uma propriedade adicional 'distance'
      return { name: customer.name, distance: distanceLimited };
    });

    // Ordena os clientes pela distância, do mais próximo ao mais distante
    customersWithDistances.sort((a, b) => a.distance - b.distance);

    // Envia a lista ordenada de clientes como resposta
    res.status(200).json(customersWithDistances);

  } catch (error) {
    // Se ocorrer um erro, registra o erro e envia uma resposta de erro
    console.error('Erro ao calcular rota: ', error);
    res.status(500).json('Erro interno no servidor');
  }
}
