'use strict'

const axios=require('axios');

const cocktailmodel=require('../models/cocktail.model');

const testApi=function(req,res){
    res.send('your api running')
}


const getcocktaila = async function(req,res){
const url='https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic';

axios.get(url).then(result=>{
res.send(result.data);

}).catch(error =>{
// console.log(error);
})
}

const addfavcocktail=async function(req,res){
    const {strDrink,strDrinkThumb,idDrink}=req.body;
    const newfavcocktail=new cocktailmodel({
        strDrink:strDrink,
        strDrinkThumb:strDrinkThumb,
        idDrink:idDrink

    })
    newfavcocktail.save();
    res.send('cocktail added');
}


const getfavcocktial=async function(req,res){
    cocktailmodel.find({},(err,Data) =>{    
        res.json(Data);
    })
}

const deletecocktail= async function(req,res){
const idx=req.params.idx

cocktailmodel.remove({_id:idx},(err,Data)=>{
    cocktailmodel.find({},(err,Data) =>{    
        res.json(Data);
    })
})
}

const updatecocktail= async function(req,res){
    const idx=req.params.idx;
    const {strDrink,strDrinkThumb,idDrink}=req.body;
    
    cocktailmodel.find({},(err,Data)=>{
Data.map((item,index)=>{
    if(index==idx){

        item.strDrink=strDrink;
        item.strDrinkThumb=strDrink;
        item.idDrink=idDrink;
item.save();

    }
})
res.send(Data)
    })

}





 module.exports = {
     testApi,
     getcocktaila,
     addfavcocktail,
     getfavcocktial,
     deletecocktail,
     updatecocktail
}