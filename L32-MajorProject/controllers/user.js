const Product = require("../models/product");
const User = require("../models/user");
const mongoose = require('mongoose');
// const User = require("../models/user");

module.exports.getIndex = (req, res, next) => {
    res.render('index', {
        isLoggedIn: req.user ? true : false,
        isAdmin: req.user.isAdmin
    });
}

module.exports.getSignIn = (req, res, next) => {
    if (req.user) return res.redirect('/profile');
    res.render('signin');
}

module.exports.getSignUp = (req, res, next) => {
    if (req.user) return res.redirect('/profile');
    res.render('signup');
}

module.exports.getProfile = (req, res, next) => {
    // console.log(req.user);
    if (!req.user) return res.redirect('/signin');
    res.render('profile', {
        user: req.user,
        isLoggedIn: req.user ? true : false,
        isAdmin: req.user.isAdmin
    });
}

module.exports.getLogout = (req, res, next) => {
    req.session.destroy(() => {
        res.redirect('/');
    })
}

module.exports.getProducts = async (req, res, next) => {
    // console.log(req.user);
    try {
        let products = await Product.find({}).populate({
            path: 'user_id',
            select: 'username -_id'
        });
        res.render('user/products', {
            products,
            isLoggedIn: req.user ? true : false,
            isAdmin: req.user.isAdmin
        });
    } catch (err) {
        next(err)
    }
}

module.exports.getAddToCart = async (req, res, next) => {
    const { id } = req.query;
    try {
        // Agar yeh id cart mei hai already toh qty + 1 kar dena
        // nahi hai cart mei toh {id, qty: 1}, add kar dena cart mei
        let user = await User.findOne({ _id: req.user._id });

        let cart = user.cart;
        let flag = false;
        cart.map((item) => {
            if (item.product_id == id) {
                item.qty += 1;
                flag = true;
            }
        })
        if (!flag) user.cart.push({ product_id: id, qty: 1 });
        await user.save();
        console.log(user)
        res.send({
            msg: 'Cart updated Successfully',
            qty: user.cart.length
        })
    } catch (err) {
        next(err)
    }
}

module.exports.getCartNumber = (req, res, next) => {
    res.send({
        msg: 'Cart updated Successfully',
        qty: req.user.cart.length
    })
}