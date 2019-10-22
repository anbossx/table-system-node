const coaRouter=require('koa-router');//路由
const user=require('../controller/user');
const router=new coaRouter();

router.get('/powers',user.power);

module.exports=router.routes();