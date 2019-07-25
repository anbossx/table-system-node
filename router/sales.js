const coaRouter=require('koa-router');//路由
const test=require('../static/text');
const router=new coaRouter();



const main=(ctx,next)=>{
    ctx.body=test;
    next()
};
const main1=async (ctx,next)=>{
    await ctx.render('index');
    next()
};
router.get('/',main);
router.get('/index',main1);
module.exports=router.routes();