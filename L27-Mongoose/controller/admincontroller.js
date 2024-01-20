const Products = require("../model/products");

module.exports.getAddProduct = (req, res, next) => {
    res.render('admin/add-product');
}

module.exports.postAddProduct = async (req, res, next) => {
    const { name, price, description, imageUrl } = req.body;
    // Products.create({
    //     name,
    //     price,
    //     description,
    //     imageUrl
    // })
    // .then((result)=>{
    //     res.redirect('/admin/products');
        
    // })
    // .catch((err)=>{
    //     next(err);
    // })
    try {
        let result = await Products.create({
            name,
            price,
            description,
            imageUrl
        });
        res.redirect('/admin/products');
    }
    catch(err){
        next(err);
    }
}

module.exports.getProducts = async(req, res, next) => {
    try{
        let products = await Products.find({}).exec();
        console.log(products);
        res.render('admin/products',{
            products
        });
    }catch(err){
        next(err);
    }
    
}