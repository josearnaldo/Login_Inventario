const express = require('express');
const router = express.Router();
const app = express();
const db = require('../controllers/db');
const insertCompany = require('../models/RegisterCompany');


router.get('/', async(req, res) =>{
  
    res.render('register.hbs', {root: './views'});
} )

router.post('/', insertCompany);











module.exports = router;