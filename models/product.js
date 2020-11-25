const { Schema,model } =require('mongoose');
const productSchema=new Schema({
    nombre:{
        type:String,
        required:true
    },
    precio:{
        type:Number,
        required:true
    },
    categoria:{
        type:String,
        required:true
    },
    cantidad:{
        type:Number,
        required:true
    },
    create_at:{
        type:String,
        required:true
    }

});
module.exports=model('Product',productSchema);