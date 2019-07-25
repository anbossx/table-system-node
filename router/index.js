const coaRouter=require('koa-router');//路由
const login=require('./login');
const sales=require('./sales');
const main=(ctx,next)=>{
    ctx.body=test;
    next()
};
const router=new coaRouter();
router.use('/login',login);
router.use('/sales',sales);
module.exports=router;
