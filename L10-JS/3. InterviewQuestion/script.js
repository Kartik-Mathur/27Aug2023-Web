let x = {
    val : 1,
    toString: function(){
        return this.val++;
    }
};

if(x == 1 && x == 2 && x == 3){
    console.log("Hello")
}
