const navslider=require('../model/web_nav');
const checkpow=require('../model/user');
class navController{
    //每次切换业务线获取到该业务线的目录（带权限验证）
    static async getnav(ctx,next){
        let req = ctx.query;
        let powernav=await checkpow.checkpower(req);
          if(powernav.roles.hasOwnProperty(req.line)){
              let result=await navslider.webnav(req,powernav.roles[req.line]);
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
        }else {
              ctx.body={
                  code:1002,
                  mes:'您没有此业务线权限，请联系相关人员开通'
              }
          }


    };
    //根据业务线获取到业务线下的目录 （不带权限验证）
    static async getAllnav(ctx,next){
        let req=ctx.query.line;
        let result=await navslider.webAllnav(req);
        try {
            ctx.body={
                code:200,
                data:result
            }
        }catch (e) {
            ctx.body={
                code:1001,
                data:e
            }
        }
    }
    //增加目录
    static async setnav(ctx,next){
        let req = ctx.request.body;
        let params={
            parentId:req.parentId,
            id:req.id,
            name:req.name,
            path:req.path
        };
        let serveLine=req.serveLine;
         let deletePath=await navslider.deletePath(req.parentId,serveLine);
         console.log(deletePath);
         if(deletePath.ok==1){
             let result=await navslider.setnav(params,serveLine);
             try {
                 ctx.body={
                     code:200,
                     data:result,
                 }
             }catch (err) {
                 ctx.body={
                     code:1001,
                     data:err,
                 }
             }
         }

    }
};
module.exports=navController;