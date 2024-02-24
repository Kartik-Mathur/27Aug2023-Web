const Users = require("../model/user");

module.exports.postSignUp = async (req, res, next) => {
    const { username, password } = req.body;
    console.log(username, password);
    try {
        let user = await Users.findOne({ username });
        if (user) {
            return res.status(401).json({
                "msg": "User is already present try another username"
            })
        }
        else {
            let user = await Users.create({
                username,
                password
            })
            return res.status(200).json({ 
                msg: "Signup Success",
                signedUp: true, 
                username 
            });
        }
    } catch (err) {
        res.status(500).json(
            {
                msg:"Signup Kaand At Server",
                err
            }
        );
    }
}

module.exports.getProfile = (req, res, next) => {
    res.status(200).json({
        msg: "Success",
        username: req.user.username,
        loggedIn: true
    })
}