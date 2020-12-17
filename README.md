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
Method: **GET** <br>
Route: `/books` <br>
Ex. Payload: **none** <br>
Responses: <br>
**200 (Success)** <br>
**500 (Internal Server Error)** <br>

### Get a book by its id:
Method: **GET** <br>
Route: `/books/:id` <br>
Ex. Payload: **none** <br>
Responses: <br>
**200 (Success)** <br>
**500 (Internal Server Error)** <br>

### Create a book:
Method: **POST** <br>
Route: `/books` <br>
Ex. Payload: <br>

```json
{
    "title": "The best title", 
    "summary": "A great summary", 
    "author": "R.R. Martin", 
	"publishingHouse": "The publisher house", 
	"publicationYear": 2000"
}
```

Responses: <br>
**201 (Created)** <br>
**400 (Invalid payload)** <br>
**500 (Internal Server Error)** <br>

### Create a comment in a book:
Method: **POST** <br>
Route: `/books/:id/comments` <br>
Ex. Payload: <br>

```json
{
	"nickname": "fran",
	"text": "Comment text",
	"score": 3.1
}
```

Responses: <br>
**201 (Created)** <br>
**400 (Invalid payload, Invalid id format)** <br>
**500 (Internal Server Error)** <br>

### Delete a comment from a book:
Method: **DELETE** <br>
Route: `/books/:id/comments/:commentId` <br>
Ex. Payload: **none** <br>
Responses: <br>
**200 (Success)** <br>
**400 (Invalid id format)** <br>
**404 (Book not found, Comment not found)** <br>
**500 (Internal Server Error)** <br>

## Users routes:

### Get all the users:
Method: **GET** <br>
Route: `/users` <br>
Ex. Payload: **none** <br>
Responses: <br>
**200 (Success)** <br>
**500 (Internal Server Error)** <br>

### Get a user by its id:
Method: **GET** <br>
Route: `/users/:id` <br>
Ex. Payload: **none** <br>
Responses: <br>
**200 (Success)** <br>
**400 (Invalid id format)** <br>
**404 (User not found)** <br>
**500 (Internal Server Error)** <br>

### Get all the comments of a user:
Method: **GET** <br>
Route: `/users/:id/comments` <br>
Ex. Payload: **none** <br>
Responses: <br>
**200 (Success)** <br>
**400 (Invalid id format)** <br>
**404 (User not found)** <br>
**500 (Internal Server Error)** <br>

### Create a user:
Method: **POST** <br>
Route: `/users` <br>
Ex. Payload: <br>

```json
{
	"nickname": "david",
	"email": "david@email.com"
}
```

Responses: <br>
**201 (Created)** <br>
**400 (Invalid payload)** <br>
**403 (User with that nickname exists)** <br>
**500 (Internal Server Error)** <br>

### Update the email of a user:
Method: **PUT** <br>
Route: `/users/:id` <br>
Ex. Payload:  <br>

```json
{
	"email": "fran@newemail.com"
}
```

Responses: <br>
**200 (Success)** <br>
**400 (Invalid payload, Invalid id format)** <br>
**404 (User not found)** <br>
**500 (Internal Server Error)** <br>

### Delete a user:
Method: **DELETE** <br>
Route: `/users/:id` <br>
Ex. Payload: **none** <br>
Responses: <br>
**200 (Success)** <br>
**400 (Invalid id format)** <br>
**403 (User has comments)** <br>
**404 (User not found)** <br>
**500 (Internal Server Error)** <br>
