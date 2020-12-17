## Node + MongoDB API

## Instructions

1. Install the necessary packages by running this command (you need to be at the root):

```shell
npm install
```

2. Create and start a Mongo Database Docker container by running this command from a terminal (you need to install Docker first):

```shell
docker run --rm -p 27017:27017 -d mongo:4.4-bionic
```

3. To start the api, execute this command from the same folder:

```shell
npm start
```

4. Play with the API. It should be running in **http://localhost:8080/api/** by default.

**Note:** Use the prefix `/api` before all the routes from below.

## Books routes:

### Get all the books:
Method: **GET**
Route: `/books`
Ex. Payload: **none**
Responses:
**200 (Success)**
**500 (Internal Server Error)**

### Get a book by its id:
Method: **GET**
Route: `/books/:id`
Ex. Payload: **none**
Responses:
**200 (Success)**
**500 (Internal Server Error)**

### Create a book:
Method: **POST**
Route: `/books`
Ex. Payload:

```json
{
    "title": "The best title", 
    "summary": "A great summary", 
    "author": "R.R. Martin", 
	"publishingHouse": "The publisher house", 
	"publicationYear": 2000"
}
```

Responses:
**201 (Created)**
**400 (Invalid payload)**
**500 (Internal Server Error)**

### Create a comment in a book:
Method: **POST**
Route: `/books/:id/comments`
Ex. Payload:

```json
{
	"nickname": "fran",
	"text": "Comment text",
	"score": 3.1
}
```

Responses:
**201 (Created)**
**400 (Invalid payload, Invalid id format)**
**500 (Internal Server Error)**

### Delete a comment from a book:
Method: **DELETE**
Route: `/books/:id/comments/:commentId`
Ex. Payload: **none**
Responses:
**200 (Success)**
**400 (Invalid id format)**
**404 (Book not found, Comment not found)**
**500 (Internal Server Error)**

## Users routes:

### Get all the users:
Method: **GET**
Route: `/users`
Ex. Payload: **none**
Responses:
**200 (Success)**
**500 (Internal Server Error)**

### Get a user by its id:
Method: **GET**
Route: `/users/:id`
Ex. Payload: **none**
Responses:
**200 (Success)**
**400 (Invalid id format)**
**404 (User not found)**
**500 (Internal Server Error)**

### Get all the comments of a user:
Method: **GET**
Route: `/users/:id/comments`
Ex. Payload: **none**
Responses:
**200 (Success)**
**400 (Invalid id format)**
**404 (User not found)**
**500 (Internal Server Error)**

### Create a user:
Method: **POST**
Route: `/users`
Ex. Payload: 

```json
{
	"nickname": "david",
	"email": "david@email.com"
}
```

Responses:
**201 (Created)**
**400 (Invalid payload)**
**403 (User with that nickname exists)**
**500 (Internal Server Error)**

### Update the email of a user:
Method: **PUT**
Route: `/users/:id`
Ex. Payload: 

```json
{
	"email": "fran@newemail.com"
}
```

Responses:
**200 (Success)**
**400 (Invalid payload, Invalid id format)**
**404 (User not found)**
**500 (Internal Server Error)**

### Delete a user:
Method: **DELETE**
Route: `/users/:id`
Ex. Payload: **none**
Responses:
**200 (Success)**
**400 (Invalid id format)**
**403 (User has comments)**
**404 (User not found)**
**500 (Internal Server Error)**
