const Router=require('express');
const { get } = require('mongoose');
const { getCategoriasUser ,getCategorias, getCategoria, updateCategoria, deleteCategoria, saveCategoria } =require('../controllers/categoriaController');


const router=Router();

router.route('/')
    .get(getCategorias)
    .post(saveCategoria);

router.route('/categoriauser')
      .post(getCategoriasUser);



router.route('/:id')
    .get(getCategoria)
    .put(updateCategoria)
    .delete(deleteCategoria);


module.exports=router;
    