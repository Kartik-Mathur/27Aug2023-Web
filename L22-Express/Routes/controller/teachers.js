module.exports.getTeachers = (req,res,next)=>{
    res.send("hello welcome teacher")
}

module.exports.getTimeTable = (req,res,next)=>{
    res.send("Teachers time table");
}

module.exports.postUpdateTimeTable = (req,res,next)=>{
    res.send("Teachers time table updated by you");
}