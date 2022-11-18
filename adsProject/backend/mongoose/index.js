
const express=require('express');
const app=express();

const cors=require('cors');
app.use(
    cors({
        origin:"http://localhost:3000"
    })
)

const mongoose = require('mongoose') 
const BlogTwo = require('./model/BlogTwo')
const BlogOne = require('./model/BlogOne')


const connectionString='mongodb+srv://firstCluster:firstCluster@cluster0.xa1yhbm.mongodb.net/companies?retryWrites=true&w=majority'

mongoose.connect(connectionString);
const db=mongoose.connection;
db.on('error',console.error.bind(console,'connectionerror'))
db.once('open',()=>{
    console.log('connected')
})







const port='127.0.0.1';
const hostName='8080';

app.get('/', (req,res)=>{
    
    let toSearchWord=req.url.split('=')[1]; 
    let regComb=RegExp(toSearchWord)
  
    function passingRegex(Regex){
        mongoose.model('data1').aggregate([
      
            {
                "$match":{ "$or": [{ "headline": {"$regex":Regex} },
                 { "primaryText": {"$regex":Regex} },
                 {"description": {"$regex":Regex}}
                
                ] }
            },           
            {
                "$lookup": {
                    "from": "data2",
                    "localField": "idArray",
                    "foreignField": "_id",
                    "as": "added"
                }               
            },
            {
                "$unwind":"$added"
            },          
     
         ]).exec(function(err, results){
            if(err){
                console.log(err)
            }
            res.send(results)
            ;
         })
    }
    passingRegex(regComb)



    
})



app.listen(hostName,port,()=>{
    console.log(`server is listening at:http://${port}:${hostName}`);

})


