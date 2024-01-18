# Customer Management System - Backend

Este é o repositório do backend para o Customer Management System, o sistema de gerenciamento de clientes desenvolvido como parte do teste de programação para a vaga de desenvolvedor na Facilita Jurídico.

## Pré-requisitos

Antes de começar, certifique-se de ter o seguinte instalado em sua máquina:

- Node.js
- PostgreSQL
- PostgreSQL Client

### Instalando o PostgreSQL Client

Para executar comandos SQL no banco de dados, é necessário ter o PostgreSQL Client instalado. Siga as instruções abaixo para instalar o cliente:

#### Em sistemas Debian/Ubuntu:

```bash
sudo apt-get update
sudo apt-get install postgresql-client

Em sistemas Red Hat/Fedora:
bash
Copy code
sudo dnf install postgresql
Em sistemas MacOS:
bash
Copy code
brew install postgresql
Em sistemas Windows:
Você pode baixar o PostgreSQL Client a partir do site oficial: Download PostgreSQL Client

Instalação e Configuração

Clone o repositório:

git clone https://github.com/gustavodesousalima/CustomerManagementSystem-BackEnd.git

Acesse o diretório do projeto:

cd customermanagementsystem-backend

Instale as dependências:

npm install

DDL (Data Definition Language) no Projeto:

O arquivo src/config/create_table_customers.sql contém o script DDL necessário para criar a tabela do banco de dados. Certifique-se de executar este script no PostgreSQL para configurar a estrutura do banco de dados.

psql -U <seu-usuario> -h <seu-host> -d <seu-banco-de-dados> -W -a -f src/config/create_table_customers.sql


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