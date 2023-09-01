const express = require('express');
const mysql = require('mysql2');


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'teste',
    password:'password',
    database:'inventario_bens',
})
connection.connect((err) =>{
    if(err){
        console.log('Erro ao conectar ao banco', err)
    }else{
        console.log('Banco conectado');
    }
})

module.exports = connection;