const coaRouter=require('koa-router');//路由
const webnav=require('../controller/nav_slider');
const router=new coaRouter();

router.get('/getnav',webnav.getnav);
router.post('/setnav',webnav.setnav);

module.exports=router.routes();