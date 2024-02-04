const Product = require("../models/product");

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
    const {id} = req.query;
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