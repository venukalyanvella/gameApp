const Game = require('../model/game.model');


const express = require('express');
const router = express.Router();


const addGame = async (request,response,next)=>{

    console.log(request.body)
    let result = {}
    try{
        const gameDetails = new Game({
            name :request.body.name,
            size :request.body.size,
            genres:request.body.genres,
            site :request.body.site
        });
      await  gameDetails.save().then(doc=>{
            
                    console.log('Game Added successfuly....')
                    return response.status(200).json({
                      success:true,
                      error:false,
                      statusCode:201,message:'Game Added Successfully.....'
                    })  
             
        }).catch(err=>{
            console.log('Failed to add Game')
       return response.send(200).json({
        success:false,
       error:true,
       statusCode:401,
       message:'Failed to add Game'
   })
        })
    }
    catch(error){
        console.log('Server error on game add')
       return response.send(200).json({
        success:false,
       error:true,
       statusCode:401,
       message:'Server Error'
   })
    }

   
   
}


//get task details

const getAllGames = async (request,response,next)=>{

    let { page,query,filter} = request.body;
     let limit = request.body.limit;
    page = (page-1) * limit
    let count = await totalCount(Game)
    
   await Game.find()
        .limit(limit)
        .skip(page)
        
    .then((games)=>{
            console.log(" games list");
            response.status(200).json({
                success:true,
                statusCode:200,
                data:games,
                count:count
            })
    }).catch(err=>{
            console.log("Error To get games list", err);
            response.status(200).json({
                success:false,
                statusCode:500,
                message:' Error on getting games list',
                data:null
            })
       
    })


}

const updateGames = async (request,response,next)=>{

    let task_id = request.query.id;
    console.log(task_id)

    Game.findByIdAndUpdate(task_id,request.body).exec((err,task)=>{
        if(err)
        {
            console.log('Failed to update Task Details',err);
        response.status(200).json({
            success:false,
            statusCode:500,
            message:'Failed to update Task Details',
            data:null
        })

        }
        else {
            console.log("Task Details Updated....");
        response.status(200).json({
            success:true,
            statusCode:200,
            message:'Task Details Updated'
        })
        }
    })



}

//remove/ delete task

const removeGame = async(request,response,next)=>{

    let task_id = request.query.id;

    Game.findByIdAndRemove(task_id).exec((err,doc)=>{
        if(err)
        {
            console.log('Failed to remove Task Details',err);
        response.status(200).json({
            success:false,
            statusCode:500,
            message:'Failed to remove Task Details',
            data:null
        })

        }
        else {
            console.log("Task Deleted....");
        response.status(200).json({
            success:true,
            statusCode:200,
            message:'Task Deleted'
        })
        }
    })


}

//calculate Count 

async function totalCount(model){

const count = await model.find().countDocuments(function (err, count) {
    if (err) console.log(err)
    else console.log('')
});

return count

}

module.exports = {
    addGame,
    getAllGames,
    updateGames,
    removeGame
}

