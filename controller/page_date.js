const pagedata=require('../model/page_data');
class pageData{
    static async getdata(ctx,next){
        let req = ctx.query;
        let result=await pagedata.pageData(req);
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
module.exports=pageData;