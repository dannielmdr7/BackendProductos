const { Schema, model }=require('mongoose');

const categoriaSchema=new Schema({
    nombre:{
        type:String
    },
    create_at:{
        type:String,
        required:true
    }
});
module.exports=model('Categoria',categoriaSchema);