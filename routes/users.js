const Router=require('express');
const { getUsers, saveUser, getUser } = require('../controllers/userController');


const router=Router();

router.route('/')
    .get(getUsers);
router.route('/auth')
    .post(getUser);

router.route('/')
    .post(saveUser);



module.exports=router;