require('dotenv').config();

const express = require("express");
const helmet = require('helmet');
const cors = require('cors');
const xss = require('xss-clean');
const app = express();

app.set('trust proxy',1);
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(xss());

const PORT = process.env.PORT || 5000;


app.get('/',(req,res)=>{
    res.send('this is the server')
});

app.listen(PORT,()=>{
    console.log(`server is listening to port ${PORT}`);
});


module.exports = app;