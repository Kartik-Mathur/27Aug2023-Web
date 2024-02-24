const Users = require("../model/user");

module.exports.postSignUp = async (req, res, next) => {
    const { username, password } = req.body;
    try {
        let user = await Users.findOne({ username });
        if (user) {
            return res.status(401).json({
                "msg": "User is already present try another username"
            })
        }
        else {
            let user = await User.create({
                username,
                password
            })
            return res.status(200).send({signedUp: true,username});
        }
    }catch(err){
        res.status(500).json(err);
    }
}