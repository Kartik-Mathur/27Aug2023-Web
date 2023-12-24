const Tasks = require('../models/taskModel');

module.exports.getTasks = async (req,res)=>{
    try{
        let todos = await Tasks.getTasks();
        res.render('index',{
            todos
        });
    }
    catch(err){
        res.redirect('/error');
    }
}

module.exports.postAddTask = async (req,res)=>{
    const {task,reqType} = req.body;

    try{
        let data = await Tasks.addTask(task);
        console.log(reqType);
        if(reqType === 'xhr') return res.send(data);
        res.redirect('/');
    }
    catch(err){
        res.redirect('/error');
    }
    // Yeh dobara se GET request bhej dega on path: '/'
    // res.redirect('/');
}


// module.exports.getIncreasePriority = (req,res)=>{
//     const {name} = req.query;
//     let indx = todos.indexOf(name);
//     let temp = todos[indx];
//     todos[indx] = todos[indx-1];
//     todos[indx-1]=temp;
//     res.redirect('/');
// }

module.exports.getIncreasePriority = async (req,res)=>{
    const {name, reqType} = req.query;  
    try{
        let data = await Tasks.increasePriority(name);
        if(reqType === 'xhr') return res.send(data);
        res.redirect('/');
    }
    catch(err){
        res.redirect('/error');
    }
}

// module.exports.getDecreasePriority = (req,res)=>{
//     const {name} = req.query;
//     let indx = todos.indexOf(name);
//     let temp = todos[indx];
//     todos[indx] = todos[indx+1];
//     todos[indx+1]=temp;
//     res.redirect('/');
// }
module.exports.getDecreasePriority = async (req,res)=>{
    const {name, reqType} = req.query;  
    try{
        let data = await Tasks.decreasePriority(name);
        if(reqType === 'xhr') return res.send(data);
        res.redirect('/');
    }
    catch(err){
        res.redirect('/error');
    }
}

// module.exports.getDeleteTask = (req,res)=>{
//     const {name} = req.query;
//     todos = todos.filter(e=>{
//         if(e == name) return false;
//         return true;
//     })
//     res.redirect('/');
// }

module.exports.getDeleteTask = async(req,res)=>{
    const {name, reqType} = req.query;  
    try{
        let data = await Tasks.DeleteTask(name);
        if(reqType === 'xhr') return res.send(data);
        res.redirect('/');
    }
    catch(err){
        res.redirect('/error');
    }

}