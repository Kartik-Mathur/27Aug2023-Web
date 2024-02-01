module.exports.getIndex = (req,res,next)=>{
    res.render('index');
}

module.exports.getSignIn = (req,res,next)=>{
    res.render('signin');
}

module.exports.getSignUp = (req,res,next)=>{
    res.render('signup');
}