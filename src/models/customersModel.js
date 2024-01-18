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

  static async registerCustomer(name, email, telephone) {
    try {
      const result = await pool.query('INSERT INTO customers (name, email, telephone) VALUES ($1, $2, $3) RETURNING *', [name, email, telephone]);
      return result.rows[0];
    } catch (error) {
      console.error('Erro ao cadastrar cliente: ', error);
      throw error;
    }
  }
}

export default CustomerModel;
