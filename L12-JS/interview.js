const obj = {
    a : 1 ,
    outer : function(){
        console.log(this == obj); // true
        const inner = ()=>{
            console.log(this)
        }
        inner();
    }
}

obj.outer();


