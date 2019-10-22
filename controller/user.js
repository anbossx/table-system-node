const user=require('../model/user');
class userController{
    static async power(ctx,next){
        let req = ctx.query.user;
        let result=await user.power(req);
        try {
            ctx.body={
                code:200,
                data:result,
            }
        }catch (err) {
            ctx.body={
                code:1001,
                mes:err
            }
        }

    }
};
module.exports=userController;