const {getDB} = require("../connections/database");

module.exports.postAddTask = async (req,res,next)=>{
    const {task} = req.body;
    const db = getDB();
    const todo = db.collection('todo');
    const counter = _db.collection('counter');
        
    let cnt =  await counter.findOne({}).toArray();
    let indx;
    if(cnt.val){
        counter.updateMany({},{
            $set:{
                val: cnt.val+1
            }
        })
        indx = cnt.val+1;
    }
    else{
        counter.insertOne({
            val: 1
        });
        indx = 1;
    }

    await todo.insertOne({task,indx});
    res.redirect('/allTasks');
}

module.exports.allTasks = async (req,res,next)=>{
    const db = getDB();
    const todo = db.collection('todo');
    let data = await todo.find({}).toArray();
    res.send(data);
}

module.exports.getTask = async (req,res,next)=>{
    const db = getDB();
    const todo = db.collection('todo');
    let data = await todo.find({}).toArray();
    console.log(data);
    res.render('index',{
        todos: data
    })
}