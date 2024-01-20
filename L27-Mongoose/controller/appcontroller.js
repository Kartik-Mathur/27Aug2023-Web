const Products = require("../model/products");

module.exports.getIndex = (req,res,next)=>{
    res.render('index');
}

module.exports.getProducts = async (req,res,next)=>{
    
    try{
        let products = await Products.find({}).exec();
        console.log(products);
        res.render('app/products',{
            products
        });
    }catch(err){
        next(err);
    }
}