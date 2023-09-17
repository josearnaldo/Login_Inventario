const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
const port = 3000;
const {handlebars} = require("hbs");
const registerRouter = require('./routes/register')
const db = require('./controllers/db'); 
const loginrouter = require('./routes/login');
const session = require('express-session');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

//configurando sessão
app.use(session({
  secret: 'token',
  resave: false,
  saveUninitialized: true
}))




// Separando por seçao, depois para manutençao fica facil de visualizar;


//Rota para registrar usuario------
app.use('/register', registerRouter); // rota para pagina de registro

  


app.use('/login', loginrouter);




app.use(express.static('public'));
app.set('view engine', 'hbs');


//pagina principal

app.get('/dashboard', async(req, res)=>{
  if(req.session.isAuthenticated){
    const username = req.session.name_company;
   res.render('dashboard.hbs', {username});
   
  }else{
    res.redirect('/login');
  }

})
app.get('/logout', (req, res)=>{
  req.session.destroy((err)=>{
    if(err){
      console.error("Erro ao fazer logout:", err)
    }else{
      res.redirect('/login');
    }
  })
})
app.get('/fornecedor', async(req, res)=>{
  if(req.session.isAuthenticated){
    const username = req.session.name_company;
   res.render('fornecedor.hbs', {username});
   
  }else{
    res.redirect('/login');
  }
})


app.get('/cadastrarfornecedor', (req, res)=>{
  res.render('cadastrofornecedor.hbs');
});



app.listen(port, ()=>{
  console.log('http://localhost:3000');
})