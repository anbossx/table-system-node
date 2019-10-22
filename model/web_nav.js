const Monk = require('monk');
// const db=new Monk('127.0.0.1:27017/adminLogin');//链接到库
var db = require('monk')('127.0.0.1:27017/webServer');

class navSchema{

    //客户获取目录
    static async webnav(params,PageIdList){
        let dbType=params.line+'_nav';
        let nav=db.get(dbType);
        // return await nav.find({key:{$in:params.key}}, {sort:{"lineSort":1}})
        return await nav.find({
            $or:[
                {
                    id:{$in:PageIdList}
                },
                {
                    path:{$exists:false}
                }
            ]


        })
    }
    //给客户端增加目录
    static async setnav(params,serveLine){
        let dbType=serveLine+'_nav';
        let nav=db.get(dbType);
        return await nav.insert(params)
    }

    //删除父目录的path属性
       static async deletePath(id,serveLine){
           let dbType=serveLine+'_nav';
           let nav=db.get(dbType);
           return await nav.update({id:id},{'$unset':{path:0}})

       }

}

module.exports=navSchema;