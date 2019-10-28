const coaRouter=require('koa-router');//路由
const user=require('../controller/user');
const router=new coaRouter();

router.get('/powers',user.power);
router.get('/getPowerUser',user.getPowerUser);
router.post('/setPower',user.setPower)
module.exports=router.routes();