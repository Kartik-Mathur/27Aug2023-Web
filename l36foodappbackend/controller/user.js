const Foods = require("../model/Food")

module.exports.getFoods = async (req,res,next)=>{
    try{    
        let foods = await Foods.find({});
        console.log("Foods",foods);
        res.send(foods);
    }catch(err){

    }
}