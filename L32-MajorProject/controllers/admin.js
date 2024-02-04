const path = require('path');
const Product = require('../models/product');
const cloudinary = require('cloudinary').v2
const DatauriParser = require('datauri/parser');
const parser = new DatauriParser();

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
        let products = await Product.find({}).populate({
            path: 'user_id',
            select: 'username isAdmin -_id'
        });
        console.log(products);
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
    const myUrl = parser.format('.png', image.buffer);
    try {
        let newProduct = await Product.create({
            name,
            description,
            price,
            image: myUrl.content,
            user_id: req.user._id
        });
        return res.redirect('/admin/products');

    }
    catch (err) {
        next(err);
    }
}


module.exports.getEditProduct = async (req, res, next) => {
    const { id } = req.query;
    try {
        let product = await Product.findOne({ _id: id }).populate({
            path: 'user_id',
            select: 'username -_id'
        });
        res.render('admin/editproduct', {
            product,
            isLoggedIn: req.user ? true : false,
            isAdmin: req.user.isAdmin
        })
    }
    catch (err) {
        next(err);
    }
}

module.exports.postEditProduct = async (req, res, next) => {
    const { name, price, description, id } = req.body;
    const image = req.file;
    const myUrl = parser.format('.png', image.buffer);

    try {
        let meraPreviousProduct = await Product.findOne({ _id: id });
        meraPreviousProduct.name = name;
        meraPreviousProduct.price = price;
        meraPreviousProduct.description = description;
        meraPreviousProduct.image = myUrl.content;
        await meraPreviousProduct.save();
        return res.redirect('/admin/products');

    }
    catch (err) {
        next(err);
    }
}