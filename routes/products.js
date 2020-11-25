const Router=require('express');
const { getProductByName,getProductsUser, getProduct, getProducts, saveProduct, updateProduct, deleteProduct } =require('../controllers/productController');

const router=Router();

router.route('/')
    .get(getProducts)
    .post(saveProduct);

router.route('/prod')
    .post(getProductsUser);
    
router.route('/prod/:id')
    .put(getProductsUser);

router.route('/:id')
    .get(getProduct)
    .put(updateProduct)
    .delete(deleteProduct);

router.route('/prod/:nombre')
    .get(getProductByName);



module.exports=router; 