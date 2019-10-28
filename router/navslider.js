const coaRouter=require('koa-router');//路由
const webnav=require('../controller/nav_slider');
const router=new coaRouter();

router.get('/getnav',webnav.getnav);
router.get('/getAllnav',webnav.getAllnav)
router.post('/setnav',webnav.setnav);

module.exports=router.routes();