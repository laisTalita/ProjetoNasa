const express = require('express');
const cors = require('cors')
require('dotenv').config();
const app = express();
const port = process.env.PORT || 4000; 

app.use(cors())

app.use(express.static('public'))
app.get('/api/chave',(req,res) =>{
    res.json({chave: process.env.CHAVE});
})
app.listen(port,()=>{
    console.log(`Server running on http://localhost:${port}/`);
})