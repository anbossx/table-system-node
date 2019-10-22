const Monk = require('monk');
// const db=new Monk('127.0.0.1:27017/adminLogin');//链接到库
var db = require('monk')('127.0.0.1:27017/webServer');
const nav=db.get('user');
class userSchema{
    //客户获取目录
    static async power(params){
        return await nav.find({
            name:params
        });

    }
    //切换业务线时的权限验证
    static async checkpower(params){
         let option='roles.'+params.line;
        return await nav.findOne({
            name : params.user
        },option);

    }
}

module.exports=userSchema;