const express= require('express')
const mongoose= require('mongoose')
const bodyParser= require('body-parser')
const route = require('./routes/postRoute')
const app= express()

app.use(bodyParser.json()) // middleware

const PORT= 5000
const URL= 'mongodb://localhost:27017/pagination'

mongoose.connect(URL).then(()=>{
    console.log('Mongodb is connected');
})
.catch((error)=>{
    console.log(error);
})

app.listen(PORT, ()=>{
    console.log('server is running');
})

app.use('/api', route)