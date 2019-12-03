const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');

const signin = require('./controllers/signin');
const register = require('./controllers/register');
const userid = require('./controllers/userid');
const image = require('./controllers/image');

const db = knex({
  client: 'pg',
  connection: {
  connectionString: process.env.DATABASE_URL,
  ssl:true,
  }
});
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req,res) => {res.send("App is working properly")})
app.post('/signin', (req,res) => {signin.signinHandle(req,res,bcrypt,db) })
app.post('/register', (req,res)=> {register.registerHandle(req,res,bcrypt,db) })
app.get('/user/:id', (req,res)=>{userid.registerHandle(req,res,db) })
app.put('/image', (req,res)=>{image.imageHandle(req,res,db) })
app.post('/imageurl', (req,res)=>{image.handleApiCall(req,res) })

app.listen(process.env.PORT || 3000, ()=>{
	console.log('is ok')
})
