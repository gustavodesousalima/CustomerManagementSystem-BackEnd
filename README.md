#Customer Management System - Backend
Este é o repositório do backend para o Customer Management System, o sistema de gerenciamento de clientes desenvolvido como parte do teste de programação para a vaga de desenvolvedor na Facilita Jurídico.

##Pré-requisitos
Antes de começar, certifique-se de ter o seguinte instalado em sua máquina:

Node.js
PostgreSQL

Instalação e Configuração

Clone o repositório:

git clone https://github.com/gustavodesousalima/CustomerManagementSystem-BackEnd.git

cd customermanagementsystem-backend

Instale as dependências:
npm install

Configure o banco de dados PostgreSQL:

Abra o arquivo src/config/db.js e atualize as informações de conexão com o banco de dados (host, user, password, database).

const pool = new Pool({
  user: 'seu-usuario',
  host: 'localhost',
  database: 'seu-banco-de-dados',
  password: 'sua-senha',
  port: 5432,
});

Inicie o servidor:
npm start

O servidor estará disponível em http://localhost:5001/clientes/.


Observação: Certifique-se de que o servidor backend esteja em execução para permitir a comunicação adequada com o frontend. Ambos os servidores devem estar em execução simultaneamente para o correto funcionamento do sistema. Certifique-se de ajustar as configurações do banco de dados no arquivo src/config/db.js conforme necessário.