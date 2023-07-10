const express = require('express');
const appForBook = express.Router();
const db = require('../db');

appForBook.get("/",(request, response ) => {

    db.query("select * from booktable",(error, result) => {

        if(error == null)
        {
            var data = JSON.stringify(result)
            response.setHeader("Content-Type", "application/json")
            response.write(data)

        }
        else{
            console.log(error)
            response.setHeader("Content-Type", "application/json")
            response.write(error)
        }
        response.end();
    })
    
})

appForBook.post("/",(request, response ) => {

    var query = `insert into booktable values('${request.body.id}','${request.body.bname}', '${request.body.author}', '${request.body.booktype}', 
    ${request.body.price},'${request.body.publishedDate}', '${request.body.language}') `;
    db.query(query,(error, result) => {

        if(error == null)
        {
            var data = JSON.stringify(result)
            response.setHeader("Content-Type", "application/json")
            response.write(data)

        }
        else{
            console.log(error)
            response.setHeader("Content-Type", "application/json")
            response.write(error)
        }
        response.end();
    })
    
})

appForBook.put('/:id',(request, response ) => {

    var query = `update booktable set price = ${request.body.price},language = '${request.body.language}' where id = ${request.params.id} `;
    db.query(query,(error, result) => {

        if(error == null)
        {
            var data = JSON.stringify(result)
            response.setHeader("Content-Type", "application/json")
            response.write(data)

        }
        else{
            console.log(error)
            response.setHeader("Content-Type", "application/json")
            response.write(error)
        }
        response.end();
    })
    
})

module.exports = appForBook