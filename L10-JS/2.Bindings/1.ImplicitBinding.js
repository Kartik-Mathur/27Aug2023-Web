let obj = {
    fun: function(){
        console.log(this)
        console.log(this.x)
        console.log(this.y)
        this.z = "new variable";
    },
    x: 10,
    y: "Hello"
};

console.log(this); // Global

obj.fun();
console.log(obj);