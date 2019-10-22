const coaRouter=require('koa-router');//路由
const PageDate=require('../controller/page_date');
const router=new coaRouter();

router.get('/',PageDate.getdata);

module.exports=router.routes();