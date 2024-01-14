const {getDB} = require("../connections/database");


module.exports.postAddTask = async (req,res,next)=>{
    const {name} = req.body;
    const db = getDB();
    await db.task.insertOne({name});
    res.redirect('/gettask');
}

module.exports.getTask = async (req,res,next)=>{
    const db = getDB();
    let data = await db.task.find({}).toArray();
    console.log(data);
    res.send(data);
}