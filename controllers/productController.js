const Product=require('../models/product');
const productCtrl={};


productCtrl.getProducts= async (req,res)=>{
    const products=await Product.find();
    res.json({
        ok:true,
        products
    })
};
productCtrl.getProduct= async (req,res)=>{
    const id=req.params.id;
    const product=await Product.findById(id);
    res.json({
        product
    })
};
productCtrl.getProductsUser=async(req,res)=>{
    const { id } =req.body;
    const products = await Product.find( {create_at:id} )
    res.json({
        products
    });
}

productCtrl.saveProduct=async (req,res)=>{
    const { nombre,precio,categoria,cantidad,create_at }=req.body;
    const newProduct=new Product({
        nombre,
        precio,
        categoria,
        cantidad,
        create_at
    });
    await newProduct.save();
    res.json({
        ok:true,
        message:'Producto agregado'
    })
}
productCtrl.updateProduct=async(req,res)=>{
    const id=req.params.id;
    const { nombre, precio, categoria, cantidad,create_at }=req.body;
    const product=await Product.findByIdAndUpdate(id,{
        nombre,
        precio,
        categoria,
        cantidad,
        create_at
    });
    res.json({
        ok:true,
        message:'Usuario Actualizado Correctamente'
    })
};
productCtrl.deleteProduct=async (req,res)=>{
    const id=req.params.id;
    await Product.findByIdAndDelete(id);
    res.json({
        ok:true,
        message:'Usuario eliminado Correctamente'
    })

}
productCtrl.getProductByName=async (req,res)=>{
    const  nombre=req.params.nombre;
    const producto= await Product.find({nombre:nombre});
    res.json({
        producto
    });
}
module.exports=productCtrl;