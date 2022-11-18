
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


    mongoose.model('data1').aggregate([
       
        {
            "$match":{ "$or": [{ "headline": {"$regex":/`${toSeachWord}`/i} },
             { "primaryText": {"$regex":/`${toSeachWord}`/i} },
             {"description": {"$regex":/`${toSeachWord}`/i}}
            
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
















    // BlogOne.find({_id:`6374a89a82f7d6b0e3c956d2`}).exec((err,data)=>{
    //     if(err){
    //         console.log(err)
    //     }
        
    //     res.send(data)




    // })
    // db.data1.aggregate({$lookup:{from:'data2',localField:'idArray',foreignField:'_id',as:'added'}})
    // BlogOne.aggregate.$lookup({ from: 'DataTwo', localField: 'idArray', foreignField: '_id', as: 'added' })
    // BlogTwo.aggregate([
    //     {

    //         // $lookup:{
    //         //     from:'BlogTwo',
    //         //     localField:'idArray',
    //         //     foreignField:'_id',
    //         //     as:'added'
    
    //         // }

    //             '$lookup':{
    //                 'from':'BlogOne',
    //                 'let':{'searchId':{$toObjectId:'$idMain'}},
    //                 'pipeline':[
    //                     {'$match':{'$expr':[{'$_id':'$$searchId'}]}}
    //                 ],
    //                 'as':'productInfo'
    //             }
    
    
    
    //     }
    // ],(err,data)=>{
    //     if(err){
    //         console.log(err)
    //     }
    //     console.log(data)
    // })
    




    // console.log(    Blog2.aggregate.lookup({
    //     from:Blog.collection.name,
    //     localField:'idMain',
    //     foreign:'idSide',
    //     as:'added'



    // }))
    
})



app.listen(hostName,port,()=>{
    console.log(`server is listening at:http://${port}:${hostName}`);

})


