import pool from '../config/db.js';

export const getCustomers = async (req, res) => {
    try {
        const response = await pool.query('SELECT * FROM customers');
        res.status(200).json(response.rows);
    } catch (error) {
        console.error('Erro ao buscar clientes: ', error);
        res.status(500).json('Erro interno no servidor');
    }
};

export const registerCustomer = async (req, res) => {
    const { name, email, telephone } = req.body;
    try {
        const result = await pool.query('INSERT INTO costumers (name, email, telephone) VALUES ($1, $2, $3) RETURNING *', [name, email, telephone]);
        res.status(200).json(result.rows[0]);
    } catch (error) {
        console.error('Erro ao cadastrar cliente: ', error);
        res.status(500).send('Erro interno no servidor');
    }
};