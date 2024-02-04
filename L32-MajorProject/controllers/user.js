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

