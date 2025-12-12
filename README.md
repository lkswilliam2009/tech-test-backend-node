
# API Backend Node.js using Express Framework


Created By Lokius William T
## Break for Coffee Time

Please make sure you're already install **Node.js v.18.8.0** to use following **npm** command and **PostgreSQL** in your machine. Then execute dump public.sql into your **PostgreSQL** database to store the table, view and data. 



## Run Locally

Clone the project

```bash
  git clone https://github.com/lkswilliam2009/tech-test-backend-node.git
```

Go to the project directory

```bash
  cd tech-test-backend-node
```

Install dependencies
```bash
  cd tech-test-backend-node/api
```
```bash
  npm install
```

Start the server

```bash
  nodemon
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DATABASE_URL=postgres://postgres:postgres@localhost:5432/tech_test_backend_node_db`

`SERVER_PORT=5017`


## API Reference

#### Connected to Swagger API Documentation

```http
  http://localhost:5017/api-docs
```



