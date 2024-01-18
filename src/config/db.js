import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  connectionString: 'postgres://oorkvbla:eHNh-9bYOWlhDfk1eAklFNw2n3Qrp-Nb@tuffi.db.elephantsql.com/oorkvbla'
});

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