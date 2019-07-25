class loginController{
    static  loginTest(ctx,next){
        let req=ctx.request.body;
        ctx.body = {
            code: 200,
            msg: '创建文章成功',
        };
        next()
    }
}
module.exports=loginController;
