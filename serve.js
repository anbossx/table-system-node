const Koa=require('koa');
const router=require('koa-route');
const koastatic=require('koa-static');
const test=require('./static/text');
const path = require('path');
const app=new Koa();

const main=ctx=>{
   ctx.body=test
};

const login=ctx=>{
    ctx.response.type='html';
    ctx.response.body='<h1>这个是登陆界面</h1>'
};
app.use(router.get('/login',login));
app.use(router.get('/',main));
app.use(koastatic(path.join(__dirname,'static')));
app.listen(3001,()=>{
    console.log('server is starting at port 30001 ')
});