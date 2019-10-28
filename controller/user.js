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
    static async getPowerUser(ctx,nex){
      let req=ctx.query.user;
      let result=await user.getPowerUser(req);
      try {
          ctx.body={
              code:200,
              data:result
          }
      }catch(err){
          ctx.body={
              code:1001,
              mes:err
          }
      }
    }
    static async setPower(ctx,nex){
        let req = ctx.request.body;
         let result=await user.setPower(req);
         console.log(result);
          try {
              if(result.ok==1){
                  ctx.body={
                      code:200,
                      mes:'添加成功',
                  }
              }

          }catch (e) {
              ctx.body={
                  code:1001,
                  mes:e,
              }
          }

    }
};
module.exports=userController;