const Koa=require('koa');
const coaRouter=require('koa-router');//路由
const koastatic=require('koa-static');//加载静态资源
const test=require('./static/text');
const path = require('path');
const compose=require('koa-compose');//合并中间件
const render=require('koa-ejs');
const app=new Koa();
const router=new coaRouter();
const indexroute=require('./router');
const log=(ctx,next)=>{
    console.log(`${Date.now()} ${ctx.request.method} ${ctx.request.url}`);
    next()
};
render(app,{
    root:path.join(__dirname,'views'),
    layout:'layout',
    viewExt:'html',
    cache:false,
    debug:false
});
// router.get('/index',async (ctx,next)=>{
//      await ctx.render('index');
//     next()
// });
app.use(koastatic(path.join(__dirname,'static')));
// app.use(router.routes()).use(router.allowedMethods());
app.use(indexroute.routes()).use(indexroute.allowedMethods());
app.listen(3001,()=>{
    console.log('server is starting at port 3001 ')
});