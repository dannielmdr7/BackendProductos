
const Categoria=require('../models/categoria');
const categoriaCtrl={};

categoriaCtrl.getCategorias=async(req,res)=>{
    const categorias= await Categoria.find();
    res.json({
        ok:true,
        categorias
    })
};
categoriaCtrl.getCategoria=async (req,res)=>{
    const id=req.params.id;
    const categoria= await Categoria.findById(id);
    res.json({
        categoria
    })
}
categoriaCtrl.updateCategoria=async(req,res)=>{
    const id=req.params.id;
    const { nombre,create_at }=req.body;
    const product=await Categoria.findByIdAndUpdate(id,{
        nombre,
        create_at
    });
    res.json({
        ok:true,
        message:'Usuario Actualizado Correctamente'
    })
};
categoriaCtrl.deleteCategoria= async(req,res)=>{
    id=req.params.id;
    await Categoria.findByIdAndDelete(id);
    res.json({
        ok:true,
        message:'Producto Eliminado Correctamente '
    })
}

categoriaCtrl.saveCategoria=async (req,res)=>{
    const { nombre,create_at }=req.body;
    const newCategory=new Categoria({
        nombre,
        create_at
    });
    await newCategory.save();
    res.json({
        ok:true,
        message:'Producto guardado Correctamente'
    })
}

categoriaCtrl.getCategoriasUser=async (req,res)=>{
    const { id } =req.body;
    const products = await Categoria.find( {create_at:id} )
    res.json({
        products
    });
}


module.exports=categoriaCtrl;