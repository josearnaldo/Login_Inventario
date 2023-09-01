const express = require('express');
const router = express.Router();
const app = express();
const db = require('../controllers/db');
const login = require('../controllers/login');




router.get('/', async(req, res) =>{
  res.render('login.hbs',{root:'./views'})   
 
} )
router.post('/', login);







module.exports = router;