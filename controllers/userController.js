const User=require('../models/user');
const userCtrl={};

userCtrl.getUsers=async (req,res)=>{
    
    const users=await User.find()
    res.send(users);
}
userCtrl.getUser=async (req,res)=>{
    const {username , password }=req.body;
    const user=await User.find( {username:username, password:password} )
    res.json(user);
    
}
userCtrl.saveUser=async (req,res)=>{
    const { username, password }=req.body;
    const newUser=new User({username, password});
    await newUser.save();
    res.json({
        ok:true,
        message:'Usuario Creado Correctamente'
    });
}


module.exports=userCtrl;