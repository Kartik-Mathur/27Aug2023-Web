const path = require('path');
const Product = require('../models/product');
const cloudinary = require('cloudinary').v2
cloudinary.config({
    cloud_name: 'du99v4tip',
    api_key: process.env.CLOUDINARY_API,
    api_secret: process.env.CLOUDINARY_SECRET
});

module.exports.getAddProduct = (req, res, next) => {
    res.render('admin/addproduct', {
        isLoggedIn: req.user ? true : false,
        isAdmin: req.user.isAdmin
    });
}

module.exports.getProducts = async (req, res, next) => {
    try {
        let products = await Product.find({});
        res.render('admin/products', {
            products,
            isLoggedIn: req.user ? true : false,
            isAdmin: req.user.isAdmin
        })
    } catch (err) {
        next(err);
    }
}

module.exports.postAddProduct = async (req, res, next) => {
    const { name, price, description } = req.body;
    const image = req.file;
    const imagePath = path.join('uploads', req.file.filename);
    try {
        cloudinary.uploader.upload(imagePath, async (error, result) => {
            if (error) return next(error);
            console.log(result);
            let newProduct = await Product.create({
                name,
                description,
                price,
                image: result.url
            });
            return res.redirect('/admin/products');
        });

    }
    catch (err) {
        next(err);
    }
}

