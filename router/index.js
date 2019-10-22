const coaRouter=require('koa-router');//路由
const login=require('./login');
const getnav=require('./navslider');
const user=require('./user');
const pageData=require('./PageData');
const router=new coaRouter();
router.get('/',async (ctx,next)=>{
    await ctx.redirect('/login');
    next()
});
router.use('/login',login);
router.use('/nav',getnav);
router.use('/user',user);
router.use('/pageData',pageData);
module.exports=router;

