const mongoose = require('mongoose');


const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://venuarun6@gmail.com:Venukalyan1@@cluster0.utirk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true,useFindAndModify:true });
client.connect(err => {
  const collection = client.db("GameApp");
 
  client.close();
});


// const conn = mongoose.connect('mongodb://localhost:27017/taskmanager',{useUnifiedTopology: true, useNewUrlParser:true,useFindAndModify:true})
//         .then( ()=>{
//                 console.log('Database Connected');
//         })
//         .catch((err)=>{
//             console.log('Failed to connect Database',err);
//         })

module.exports = conn;