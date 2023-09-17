const express = require('express');
const db = require('./db');
const bcrypt = require('bcrypt');
const session = require('express-session');
const router = express.Router();

router.use(express.urlencoded({ extended: true }));

router.post('/', (req,res)=>{
    const login = req.body.email;
    const password = req.body.password;


    const query= 'Select * FROM users WHERE company_email = ?';
    db.query(query, [login], async(err, result)=>{
        if(err){
            console.error('Erro na consulta', err);
            return res.status(500).json({error: 'Erro na consulta =('});
        }

        if(result.length > 0 ){
            const Pass = result[0].password;
           
            const compare =  bcrypt.compare(password, Pass); 
            
            if (compare) {
              
                req.session.isAuthenticated = true;
                req.session.userId = result[0].id;
                req.session.name_company = result[0].name_company; 
                return res.redirect('/dashboard');
              } else {
              
                res.send('Senha incorreta!');
              }
        }else{
            res.send('User nao encontrado');
        }
    } )
})

module.exports = router;
