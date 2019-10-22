const Monk = require('monk');
// const db=new Monk('127.0.0.1:27017/adminLogin');//链接到库
var db = require('monk')('127.0.0.1:27017/adminLogin');
var dbweb = require('monk')('127.0.0.1:27017/webServer');
const login = db.get('Login');//表
const dbLogin=dbweb.get('user');
//管理员登陆
class loginSchema{
    static async  Loginmodel(params){
           return await login.find({
               name:params.user,
               password:params.password
           });
    };
    //客户端登陆
    static async  LoginWeb(params){
        return await dbLogin.find({
            name:params.user,
            password:params.password
        });

    }
}

module.exports=loginSchema;