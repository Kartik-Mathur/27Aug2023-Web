const Todo = require('../models/todo');
module.exports.getTodo = async (req, res, next) => {
    try {
        let data = await Todo.find({});
        console.log(data);
        res.render('todos', {
            data
        });
    }
    catch (err) {
        next(err);
    }
}

module.exports.postAddTask = async (req, res) => {
    try {
        const { task, price } = req.body;
        // console.log(task,price);
        await Todo.create({ task, price });
        res.redirect('/');
    }
    catch (err) {
        console.log(err.message);
        next(err);
    }
}