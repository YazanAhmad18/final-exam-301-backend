'use strict'


const mongoose=require("mongoose");

const cocktailSchema=new  mongoose.Schema({
    strDrink:String,
    strDrinkThumb:String,
    idDrink:{
    type:String,
   unique:true,
    }


})

const cocktailmodel = new mongoose.model('cocktails',cocktailSchema);

module.exports=cocktailmodel;
