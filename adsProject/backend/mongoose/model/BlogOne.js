const mongoose=require('mongoose')
const {Schema,model,ObjectId}=mongoose;
const blogSchema= new Schema({
    _id:ObjectId,
    headline:String,
    CTA:String,
    description:String,
    imageUrl:String,
    idMain:String,
    idArray:ObjectId


});





const BlogOne =model('data1',blogSchema);
module.exports=BlogOne
    


