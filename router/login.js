const coaRouter=require('koa-router');//路由
const test=require('../static/text');
const loginTest=require('../controller/loginTest')
const router=new coaRouter();
router.get('/',async (ctx,next)=>{
    const users = [{ name: 'Dead Horse' }, { name: 'Jack' }, { name: 'Tom' }];
    await ctx.render('login',{
        users
    });
    next()
});
router.post('/test',loginTest.loginTest);

module.exports=router.routes();