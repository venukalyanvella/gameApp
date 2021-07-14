const mongoose = require('mongoose');

//schema 

const GameSchema =  mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    size:{
        type:Number,
        required:true
    },
    status:{
        type:Boolean,
        default:0
    },
    genres:{
        type:String,
        required:true
    },
    site:{
        type:String,
        required:true
    },
    progress:{
        type:Number,
        default:10
    },
    created_at:{
        type:Date,
        default:Date.now
    },
    updated_at:{
        type:Date,
        default:Date.now
    }
});



module.exports = mongoose.model('Game', GameSchema);