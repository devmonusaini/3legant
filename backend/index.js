const express = require('express')

const app=express();
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
const cors = require('cors');
const Authrouter = require('./Router/Authrouter.js');
require('dotenv').config();

const PORT = process.env.PORT || 8080 ;
require("./Models/db.js");

app.get('/',(req,res)=>{
    res.send('API Running')
})
app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());   // 👈 this is required
app.use(
  cors({
    origin: "http://localhost:5173", // change to your frontend port
    credentials: true, // if you're using cookies
  })
);

app.use('/auth' , Authrouter)

app.listen(PORT , ()=>{
    console.log(`Server  is lesten on port number is : ${PORT}`);

})



