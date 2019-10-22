 class util{
    static retOneLine(obj){
         let firstLine='';
         for(let key in obj){
             firstLine=key;
             break;
         }
         let firsturl='/'+firstLine+'/'+obj[firstLine][0];
         return firsturl
    };
    static worksLines(obj){
        let worksList=[];
        for(let key in obj){
            let firsturl='/'+key+'/'+obj[key][0];
            let ibjItem={
                workline:key,
                defaultPath:firsturl,
            }
            worksList.push(ibjItem)
        }
        return worksList
    }
}
module.exports=util;