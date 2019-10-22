const url = 'localhost:27017/testdb'; // Connection URL
const db = require('monk')(url);

const collection = db.get('test');
const navlist=db.get('navlist');

// collection.update({key:"company" },{$set:{
//     'children.校园.0.kpi':{
//        name:'kpi',
//        path:'company/678965'
//     }
//
//         }
// })
//     .then((docs) => {
//
//     }).catch((err) => {
//
// }).then(() => db.close());

//
// collection.update({key:"company" },{$set:{
//         'children.校园.0.市场.0.tmk2':{
//                 name:'tmk2',
//                 path:'company/67345'
//             }
//     }
// })
//     .then((docs) => {
//
//     }).catch((err) => {
//
// }).then(() => db.close());




// collection.update({key:"company" },{$set:{
//         'children.tmk3':{
//             name:'tmk3',
//             path:'company/67345'
//         }
//     }
// })
//     .then((docs) => {
//
//     }).catch((err) => {
//
// }).then(() => db.close());



navlist.find().then((docs)=>{
    // console.log(getTree(docs,''));
      console.log(digui(docs,''))
});
function digui(list,parentId) {
    let navList=[];
    for(let item of list){

        if(item.parentId==parentId){
            let navItem={};
            navItem.id=item.id;
            navItem.name=item.name;
            navItem.parentId=item.parentId;
            navItem.children=digui(list,item.id);
            navList.push(navItem)
        }

    }
   return navList
}


// var treeData=[
//     {"id":"inter","parentId":"product","spType":0,"layerId":0,"seqId":1,"name":"网络产品","deleted":"0"},
//     {"id":"product","parentId":"","spType":0,"layerId":0,"seqId":50,"name":"产品中心","deleted":"0"},
//     {"id":"online","parentId":"product","spType":0,"layerId":0,"seqId":2,"name":"线上产品","deleted":"0"},
//     {"id":"unline","parentId":"product","spType":0,"layerId":0,"seqId":3,"name":"线下产品","deleted":"0"},
//     {"id":"update","parentId":"dispatch","spType":0,"layerId":0,"seqId":1,"name":"关于产品更新","deleted":"0"},
//     {"id":"dispatch","parentId":"","spType":0,"layerId":0,"seqId":2,"name":"通知公告","deleted":"0"},
//     {"id":"diedai","parentId":"dispatch","spType":0,"layerId":0,"seqId":2,"name":"产品迭代","deleted":"0"},
//     {"id":"address","parentId":"about","spType":0,"layerId":0,"seqId":1,"name":"公司地址","deleted":"0"},
//     {"id":"about","parentId":"","spType":0,"layerId":0,"seqId":1,"name":"关于我们","deleted":"0"},
//     {"id":"portals","parentId":"","spType":0,"layerId":0,"seqId":3,"name":"门户管理","deleted":"0"},
//     {"id":"communication","parentId":"address","spType":0,"layerId":0,"seqId":1,"name":"联系我","deleted":"0"},
// ];
var getTree=function(treeData,parentId){
    var treeArr=[];
    for(var i=0;i<treeData.length;i++){
        var node=treeData[i];
        if(node.parentId==parentId ){
            var newNode={id:node.id,name:node.name,children:getTree(treeData,node.id)};
            treeArr.push(newNode);
        }
    }
    return treeArr;
};
// console.log(getTree(treeData,''));

