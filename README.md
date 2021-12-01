<div align="center">
    <h1>🌟Web Socket Simple Calculator🌟</h1>
</div>

<div align="center">

This project is a simple web socket server made with Node Js and html on view page.
</div>

## :rocket: Technology

<div align="center">

```sh
Node Version: v16.13.0
```

![Node](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)!

</div>

## :boom: How to run

- ### **Pre requisites**

    - Make sure you have Node version 16 in your computer.

## :hammer: Application

### Clone the repository:

```sh
# HTTPS
  $ https://github.com/NiltonSousa/web-socket-nodejs.git
```

```sh
# SSH
  $ git@github.com:NiltonSousa/web-socket-nodejs.git
```

### Install the dependencies

```sh
  $ npm install
```

### Start the Web Socket

```sh
  $ npm start
```

### Open view page

https://user-images.githubusercontent.com/41588752/144149142-8ace2748-5180-4fae-81a8-d47f81e6d890.png

## :boom: Routes Laboratory
```sh
GET
  http://localhost:3001/laboratory
POST
  http://localhost:3001/laboratory
Body Example
  [
    {
    "name": "Delboni Morumbi 1",
    "address":"Morumbi",
    "status":"ativo"
    },
    {
    "name": "Delboni Morumbi 2",
    "address":"Morumbi",
    "status":"ativo"
    },
    {
    "name": "Delboni Morumbi 3",
    "address":"Morumbi",
    "status":"ativo"
    }
]
UPDATE
    http://localhost:3001/laboratory
Body Example
     {
      "_id": "6080256abb43292a347810f6",
      "name": "Lavoizier",
      "address": "Lapa de baixo",
      "status": "active"
      }
DELETE
    http://localhost:3001/laboratory
Body Example
    [
      {
        "laboratoryId":"608085411d90701a18bf1d5b"
      },
      {
        "laboratoryId":"608085411d90701a18bf1d5c"
      },
      {
        "laboratoryId":"608085411d90701a18bf1d5d"
      }
    ]
  
```

## :boom: Routes Exams
```sh
GET
  http://localhost:3001/exam
POST
  http://localhost:3001/exam
Body Example
    {
    "name":"Raio XXXX",
    "type":"analise",
    "status":"ativo"
    }
UPDATE
    http://localhost:3001/exam
Body Example
        {
        "_id": "60804c5e34364236f00154d4",
        "name": "Raio X",
        "type": "Analise",
        "status": "ativo"
        }
DELETE
    http://localhost:3001/exam/:id  
```

## :boom: Routes Associations
```sh
GET
  http://localhost:3001/Association?name=Hemograma
POST
  http://localhost:3001/association
Body Example
    {
      "examId":"60804c5e34364236f00154d4",
      "laboratoryId":"6080376fb0b076361837d1ce"
    }
DELETE
    http://localhost:3001/association/:id 
```

## :rocket: Technology
```sh

If you want test the application, make a request using application in Heroku
    https://laboratory-maintenance.herokuapp.com/
```
