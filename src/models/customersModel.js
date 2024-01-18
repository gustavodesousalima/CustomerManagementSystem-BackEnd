import pool from '../config/db.js';

class CustomerModel {
  static async getCustomers() {
    try {
      const response = await pool.query('SELECT * FROM customers');
      return response.rows;
    } catch (error) {
      console.error('Erro ao buscar clientes: ', error);
      throw error;
    }
  }

  static async registerCustomer(name, email, telephone, coordenada_x, coordenada_y) {
    try {
      const result = await pool.query('INSERT INTO customers (name, email, telephone, coord_x, coord_y) VALUES ($1, $2, $3, $4, $5) RETURNING *', [name, email, telephone, coordenada_x, coordenada_y]);
      return result.rows[0];
    } catch (error) {
      console.error('Erro ao cadastrar cliente: ', error);
      throw error;
    }
  }
}

export default CustomerModel;
