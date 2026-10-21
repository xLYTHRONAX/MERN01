const express = require("express")
const app= express();
const dotenv=require('dotenv');

dotenv.config();
const connectDB=require('./config/db');
const mongoose=require('mongoose');

const port = process.env.PORT;

app.listen (port,()=>{
    console.log("SERVER RUNNING ON "+ port);
});
app.get("/",(req,res)=>{
    res.send('hello from backend')
})