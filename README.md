# Customer Management System - Backend

Este é o repositório do backend para o Customer Management System, o sistema de gerenciamento de clientes desenvolvido como parte do teste de programação para a vaga de desenvolvedor na Facilita Jurídico.

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
$ cd customermanagementsystem-backend

# Instale as dependências
$ npm install

#DDL (Data Definition Language) no Projeto:

O arquivo src/config/create_table_customers.sql contém o script DDL necessário para criar a tabela do banco de dados. Certifique-se de executar este script no PostgreSQL para configurar a estrutura do banco de dados.

1. Abra o terminal e acesse a pasta do projeto:

   ```bash
   $ cd customermanagementsystem-backend

Execute o script DDL no PostgreSQL para configurar a estrutura do banco de dados. Substitua <seu-usuario>, <seu-host>, <seu-banco-de-dados> pelos seus próprios valores:

 $ psql -U <seu-usuario> -h <seu-host> -d <seu-banco-de-dados> -W -a -f src/config/create_table_customers.sql


#Inicie o servidor:
npm start

O servidor estará disponível em http://localhost:5001/clients/.

Observação: Certifique-se de que o servidor backend esteja em execução para permitir
a comunicação adequada com o frontend. Ambos os servidores devem estar em execução 
simultaneamente para o correto funcionamento do sistema. Certifique-se de ajustar 
as configurações do banco de dados no arquivo src/config/db.js conforme necessário.
```

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