const express = require("express");
const mongoose = require("mongoose");
const SSI_IndexSchema = mongoose.Schema({
    location:{
        type:String
    },
    data: [{
       date:Date,
       index:Number,
       value:Number
      }],



    
});