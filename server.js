'use strict';

const express=require('express');


require('dotenv').config(); 
const cors = require('cors');


const server=express();


const PORT = process.env.PORT;
server.use(cors());


server.get('/',(req,res)=>{
    res.status(200).send('home route')
})


server.get('/test',(request,response)=>{
    response.status(200).send('my server is working')
})

server.listen(PORT,()=>{
    console.log(`Listening on PORT ${PORT}`);
})