const express = require('express');
const db = require('../controllers/db');
const bcrypt = require('bcrypt');
const router = express.Router();

router.post('/', async(req, res)=>{
    const saltRound = 10;
    const passwordstring = req.body.password.toString();
    const Companyname = req.body.Companyname;
    const password = await bcrypt.hash(passwordstring, saltRound); //NUNCA É BOM SALVAR SENHA DE FORMA BRUTA EM UM BANCO DE DADOS!! 
    const email = req.body.email;
    const telefone = req.body.telefone;
    const cnpj = req.body.cnpj;
    const address = req.body.address;
    const nr = req.body.number;
    const fullname = req.body.fullname;
    const age = req.body.age;

    const query = 'INSERT INTO users (name_company, password, company_email, telefone_company, CNPJ, ADDRESS, NUMBER_ADDRESS, fullname, age) VALUES (?,?,?,?,?,?,?,?,?)';


const values = [
    Companyname,
    password,
    email,
    telefone,
    cnpj,
    address,
    nr,
    fullname,
    age
]

db.query(query, values, (err, results) => {
    if(err){
        console.error('Erro ao cadastrar:', err);
        return res.status(500).json({ error: 'Erro ao dar insert.'});
    }else{
        console.log('inserido com sucesso');
    }
});
});

module.exports = router;