const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const app = express();
const controller = require('./controller');
const sessions = require('express-session')

app.use(bodyParser.json());
require('dotenv').config();
app.use(sessions({
    secret: 'supersecretsecret',
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 600000
    }
  }));

massive(process.env.CONNECTION_STRING)
.then((db)=> {
    console.log('database connected')
    app.set('db', db)
}).catch(err => console.log(err))

const port = 3011;

app.post('/api/auth/login', controller.login)
app.post('/api/auth/register', controller.register)
// app.post('/api/auth/logout', controller.logout)
app.post('/api/properties', controller.createProperties)
// app.get('/api/properties', controller.getProperties)
// app.delete('/api/properties/:id', controller.deleteProperties)



app.listen(port, () => console.log('Listening on port', port))