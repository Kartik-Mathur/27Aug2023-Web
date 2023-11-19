const func1 = (req,res,next)=>{
    console.log("Running Middleware-1");
    next();
}

const func2 = (req,res,next)=>{
    console.log("Running Middleware-2");
    next();
}

const func3 = (req,res,next)=>{
    console.log("Running Path specific Middleware");
    next();
}

module.exports = {
    func1,func2,func3
}