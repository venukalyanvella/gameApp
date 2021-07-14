// require packages
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const connection = require('./config/connection');

const gameroutes = require('./routes/game.routes');
const userRoute = require('./routes/user.routes')
//middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE,PATCH, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Origin, Authorization, x-access-token, Content-Length, X-Requested-With,Content-Type,Accept");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    next();
});

//routes

app.get('/',(req,res)=>{
    res.send('Express Working')
})
app.use('/api/game', gameroutes);
app.use('/api/user', userRoute)
//server

app.listen(8080,()=>{
    console.log(`Express server running at port 8080`);
})

