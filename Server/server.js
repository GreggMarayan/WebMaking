const express = require('express');
const app = express();
const port = 2000;

app.listen(port,()=>{
    console.log(`Backend at localhost:${port}`)
})

app.get('/helloworld', (req, res)=>{
    res.send("Hello World!");
})