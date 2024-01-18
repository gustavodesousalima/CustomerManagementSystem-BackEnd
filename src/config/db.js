import pkg from 'pg';
const { Pool } = pkg;

// Configurações do banco de dados
const dbConfig = {
  user: 'seu-usuario',
  host: 'localhost',
  database: 'seu-banco-de-dados',
  password: 'sua-senha',
  port: 5432,
};

const pool = new Pool(dbConfig);

// Adicione um evento para verificar quando a conexão é estabelecida
pool.on('connect', () => {
  console.log('Conectado ao banco de dados PostgreSQL');
});

// Adicione um evento para verificar se há erros durante a conexão
pool.on('error', (err) => {
  console.error('Erro durante a conexão ao banco de dados:', err);
  process.exit(-1); // Encerre o processo em caso de erro
});

export default pool;