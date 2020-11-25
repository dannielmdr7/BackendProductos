const express=require('express');
const cors=require('cors');

const app=express();

app.set('port',process.env.PORT || 4000);

//Middlewares
app.use(cors());
app.use(express.json());


//Rutas
app.use('/api/users',require('./routes/users'));
app.use('/api/products',require('./routes/products'));
app.use('/api/categorias',require('./routes/categoria'));



module.exports=app;

