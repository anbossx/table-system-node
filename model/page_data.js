const Monk = require('monk');
// const db=new Monk('127.0.0.1:27017/adminLogin');//链接到库
var db = require('monk')('127.0.0.1:27017/webServer');
const nav=db.get('companyData');
class pageDataSchema{
    //页面数据
    static async pageData(params){
        return await nav.find(
            {
                lineserve:params.lineserve,
                page:params.page
            }
        )

    }
}

module.exports=pageDataSchema;