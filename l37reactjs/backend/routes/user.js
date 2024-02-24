const path = require('path');
const express = require('express');
const router = express.Router();

const userController = require('../controller/userController');
const isLoggedIn = require('../middleware/isLoggedIn');

router.get('/profile', isLoggedIn, userController.getProfile);
router.post('/signup', userController.postSignUp);
router.get('/', (req, res, next) => {
    console.log(req.user);
    if (req.user) return res.status(200).json({
        "msg": "Success",
        username: req.user.username,
        loggedIn: true
    })
    else {
        console.log("Here");
        return res.status(401).json({
            msg: "You need to login first",
            loggedIn: false
        })
    }
})


module.exports = router;