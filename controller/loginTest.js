 const adminLogin=require('../model/loginTest');
 const util=require('../static/js/util');
class loginController{
    //管理端登陆
    static  async loginTest(ctx,next){

        let req = ctx.request.body;
          if(req.user && req.password){
              try {
                  let result=await adminLogin.Loginmodel(req);
                  ctx.body = {
                      code: 200,
                      msg: '登陆成功',
                  };
              }catch (err) {
                  ctx.body = {
                      code:1002,
                      msg: err,
                  };
              }
          }else {
              ctx.body = {
                  code: 1001,
                  msg: '请输入用户密码',
              };
          }

    };
   // 客户端登陆
    static async webLogin(ctx,next){
        let req = ctx.request.body;
        if(req.user && req.password){
            try {
                let result=await adminLogin.LoginWeb(req);
                let firturl=util.retOneLine(result[0].roles);
                let worksLine=util.worksLines(result[0].roles);
                ctx.body = {
                    code: 200,
                    msg: '登陆成功',
                    firstUrl:firturl,
                    worksLines:worksLine
                };
            }catch (err) {
                ctx.body = {
                    code:1002,
                    msg: err,
                };
            }


        }else {
            ctx.body = {
                code: 1001,
                msg: '请输入用户密码',
            };
        }

    }

}
module.exports=loginController;
