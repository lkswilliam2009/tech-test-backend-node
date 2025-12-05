
# API Backend Node.js using Express Framework

Created By Lokius William T



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
  npm install --save-dev husky nodemon cors dotenv express express-promise-router knex pg
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

#### Connected to API

```http
  GET http://localhost:5017/api
```

Sample JSON return success must be :
#### 
    {  
      "success": "true",
      "message": "Connected to API Node.js + PostgreSQL",
      "version": "1.0.0"
    }  


#### Get Books

```http
  GET http://localhost:5017/api/books
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `title`      | `string` | To search book title |
| `author`      | `string` | To search book author |
| `page`      | `int` | To search page |
| `limit`      | `int` | To search limit per page |

Sample JSON return success must be :
#### 
    {  
      "data": [
        {
            "id": "c3a79803-5713-431b-adbc-806f0e063200",
            "title": "The Great Gatsby",
            "author": "F. Scott Fitzgerald",
            "published_year": 1925,
            "stock": 5,
            "isbn": "9780743273565",
            "created_at": "2025-12-03T10:25:26.704Z",
            "updated_at": "2025-12-03T10:25:26.704Z"
        },
        {
            "id": "da15405e-86e6-46b0-b7fc-31937292d47a",
            "title": "To Kill a Mockingbird",
            "author": "Harper Lee",
            "published_year": 1960,
            "stock": 3,
            "isbn": "9780446310789",
            "created_at": "2025-12-03T10:25:26.704Z",
            "updated_at": "2025-12-03T10:25:26.704Z"
        }
    ],
    "totalItems": 2,
    "currentPage": 1,
    "totalPages": 1
    }

#### Post Members

```http
  POST http://localhost:5017/api/members
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Required** |
| `email`      | `string` | **Required** Must be valid email and unique |
| `phone`      | `string` | **Required** Indonesian Phone Number |
| `address`      | `string` | **Required** |

Sample JSON return success must be :
#### 
    {  
      "message": "Member successfully created!",
      "body": {
          "data": {
              "name": "test",
              "email": "test@1234.com",
              "phone": "+6281371655155",
              "address": "jalan jalan"
          }
      }
    }  

#### Post Borrowing

```http
  POST http://localhost:5017/api/borrowings
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `book_id`      | `int` | **Required** |
| `member_id`      | `int` | **Required** |

Sample JSON return success must be :
#### 
    {  
        "message": "Borrowing book successfully created!",
        "body": {
            "data": {
                "book_id": "aa0232e8-d62f-46a6-bc59-d05f3071f667",
                "member_id": "53857dfa-5a17-4420-970b-f082b69f8f74"
            }
        }
    }

#### Put Borrowing to Return

```http
  PUT http://localhost:5017/api/borrowings/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `member_id`      | `int` | **Required** |

Sample JSON return success must be :
#### 
    {  
        "message": "Returning book successfully created!",
        "body": {
            "data": {
                "id": "923aaebc-d76c-4d38-b7f4-ac6d1e98421e"
            }
        }
    }

#### Get History of Member

```http
  Get http://localhost:5017/api/members/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `status`      | `string` | BORROWED / RETURNED |
| `page`      | `int` | 1 |
| `limit`      | `int` | 10 |

Sample JSON return success must be :
#### 
    {  
        "data": [{
            "id": "1e4f6963-190d-467f-87ba-24b46d956180",
            "book_id": "12c3c38f-d767-405a-84f9-ffc4467ed0bf",
            "title": "The Alchemist",
            "author": "Paulo Coelho",
            "published_year": 1988,
            "stock": 11,
            "isbn": "9780062315007",
            "member_id": "8d082993-0aeb-4360-ba58-85986abbfaac",
            "name": "test",
            "email": "test@123.com",
            "phone": "+6281394439980",
            "address": "asdadas",
            "borrow_date": "2025-12-03T16:00:00.000Z",
            "return_date": "2025-12-03T16:00:00.000Z",
            "status": "RETURNED",
            "created_at": "2025-12-04T07:31:12.141Z",
            "updated_at": "2025-12-04T07:31:12.141Z"
        }],
        "totalItems": 1,
        "currentPage": 1,
        "totalPages": 1
    }                  


