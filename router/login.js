const coaRouter=require('koa-router');//路由
const loginTest=require('../controller/loginTest');
const router=new coaRouter();

router.get('/',async (ctx,next)=>{
    await ctx.render('login');
    next()
});
router.post('/test',loginTest.loginTest);
router.post('/webLogin',loginTest.webLogin);

module.exports=router.routes();