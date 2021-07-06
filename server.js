'use strict'

const express = require('express') 

const app = express()

const cors = require('cors');

app.use(cors())

app.use(express.json())

require('dotenv').config();

const PORT=process.env.PORT;

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/cocktail", { useNewUrlParser: true });


const {testApi,
    getcocktaila,
    addfavcocktail,
    getfavcocktial,
    deletecocktail,
    updatecocktail

}=require('./controllers/cocktail.controller.js')

app.get('/', testApi);


app.get('/cocktaila', getcocktaila);

app.post('/cocktia',addfavcocktail);

app.get('/favcocktial',getfavcocktial);

app.delete('/delcocktail/:dix',deletecocktail);

app.put('/updatefavcocktail/:idx',updatecocktail);

app.listen(PORT,()=>{
    console.log(`that is your port:${PORT}`)
})



