// let obj = {
//     val:1,
//     fun:function(){
//         console.log(this);
//         let innerFun = function(){
//             console.log("This inside innerFun",this);
//         }
//         innerFun();
//     }
// }

// obj.fun();

let obj = {
    val:1,
    fun:function(){
        console.log(this);
        let innerFun = ()=>{
            console.log("This inside innerFun",this);
        }
        innerFun();
    }
}
obj.fun();
