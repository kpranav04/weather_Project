
const express = require("express");
const mongoose = require("mongoose");
const SSI_IndexSchema = mongoose.Schema({
    data:{
        // type:String,
        // type:mongoose.Schema.Types.ObjectId,
        // ref:'Ticket'
        location:String,
        index:Number,
        value:Number,
        latitude:String,
        longitude:String
    },
    date: {
       type:String,
      }  
});
module.exports=mongoose.model('Ssi', SSI_IndexSchema );