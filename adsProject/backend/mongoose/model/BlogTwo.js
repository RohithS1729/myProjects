const mongoose=require('mongoose')
const {Schema,model,ObjectId}=mongoose;
const blogSchema= new Schema({

    _id:ObjectId,
    name:String,
    url:String,
    idSide:String
});





const BlogTwo =model('data2',blogSchema);
module.exports=BlogTwo
    


