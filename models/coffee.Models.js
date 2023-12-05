const mongoose = require('mongoose')

const coffeeSchema = mongoose.Schema({
    id:mongoose.Schema.Types.ObjectId,
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        min:0.99
    },
    image:{
        type:String
    },
    saleProcent:{
        type:Number,
    },
    quantity:{
        type:Number
    },
    categories:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Category'
    },
    vendor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'vendor'
    },
    size:{
        type:String,
        enum:["100","150","300","500"]
    },
    color:{
        ref:"Color",
        type:mongoose.Schema.Types.ObjectId
    },
    tags:{
        type:[String],
        required:true
    }
})

module.exports = mongoose.model("Coffee",coffeeSchema)