# Customer Management System - Backend

Este é o repositório do backend para o Customer Management System, o sistema de gerenciamento de clientes desenvolvido como parte do teste de programação para a vaga de desenvolvedor na Facilita Jurídico.

## Ferramentas utilizadas


Express:
Versão: ^4.18.2
Descrição: Framework web para Node.js que simplifica o desenvolvimento de aplicativos web.

Body-Parser:
Versão: ^1.20.2
Descrição: Middleware para Express que facilita o processamento de dados do corpo das solicitações HTTP.

CORS (Cross-Origin Resource Sharing):
Versão: ^2.8.5
Descrição: Middleware para Express que permite o controle de acesso a recursos em uma aplicação web de um domínio diferente.

pg (node-postgres):
Versão: ^8.11.3
Descrição: Cliente PostgreSQL para Node.js, permitindo interação com bancos de dados PostgreSQL.

## Pré-requisitos 🛠️

Antes de começar, certifique-se de ter o seguinte instalado em sua máquina:

- Node.js
- PostgreSQL
  
### Instalando o PostgreSQL
https://www.enterprisedb.com/downloads/postgres-postgresql-downloads

## ****🎲 Getting Started****

```
# Clone este repositório
$ git clone https://github.com/gustavodesousalima/CustomerManagementSystem-BackEnd.git

# Acesse a pasta do projeto no terminal/cmd
$ cd CustomerManagementSystem-BackEnd

# Instale as dependências
$ npm install

#DDL (Data Definition Language) no Projeto:

O arquivo src/config/create_table_customers.sql contém o script DDL necessário para criar a tabela do banco de dados. Certifique-se de executar este script no PostgreSQL para configurar a estrutura do banco de dados.

1. Abra o terminal e acesse a pasta do projeto:

   ```bash
   $ cd CustomerManagementSystem-BackEnd

   ### Configure o banco de dados PostgreSQL:

Abra o arquivo src/config/db.js e atualize as informações de conexão com o banco de dados (host, user, password, database).

```jsx
const pool = new Pool({
  user: 'seu-usuario',
  host: 'localhost',
  database: 'seu-banco-de-dados',
  password: 'sua-senha',
  port: 5432,
});
```
## Caso tenha interesse em usar o postgres-client para criar a tabela no banco de dados

Execute o script DDL no PostgreSQL para configurar a estrutura do banco de dados. Substitua <seu-usuario>, <seu-host>, <seu-banco-de-dados> pelos seus próprios valores:

 $ psql -U <seu-usuario> -h <seu-host> -d <seu-banco-de-dados> -W -a -f src/config/create_table_customers.sql

### Observação: Vale lembrar que a configuração do postgres-client, vai depender do sistema operacional que o usuário estiver utilizando.

# Inicie o servidor:

npm run start

O servidor estará disponível em http://localhost:5001/clients/.

Observação: Certifique-se de que o servidor backend esteja em execução para permitir
a comunicação adequada com o frontend. Ambos os servidores devem estar em execução 
simultaneamente para o correto funcionamento do sistema. Certifique-se de ajustar 
as configurações do banco de dados no arquivo src/config/db.js conforme necessário.
```

## Listar todos os clientes.

*method : GET*

json
http://localhost:5001/clients/getcustomers


*Formato do Retorno*

		{
		    "name": "Vitor",
		    "telephone": (11)000000000,
		    "email": "teste@gmail.com",
        	    "coord_x": "1",
        	    "coord_y": "2"
		},
  
		{
		   "name": "João",
		    "telephone": (11)111111111,
		    "email": "teste12@gmail.com",
        	    "coord_x": "3",
                "coord_y": "7"
		}
		....
## Criação de cliente

*method : POST*

json
http://localhost:5001/clients/registercustomer


		{ 
			"name":"gustavo", 
 			"email":"jvalves217@gmail.com", 
 			"telephone":"123456",
 			"coord_x":"4", 
 			"coord_y":"4" 
		}
