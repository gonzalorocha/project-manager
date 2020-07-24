const bcryptjs = require("bcryptjs");
const User = require('./../models/User');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

exports.authUser = async(req, res) => {
    const error = validationResult(req);

    if (!error.isEmpty()) {
        return res.status(400).json({
            errors: error.array()
        });
    }

    const {email, password } = req.body;

    try {
        let user = await User.findOne({email});

        if (!user) {
            return res.status(400).json({
                msg: "The email is not exist"
            });
        }

        const passValid = await bcryptjs.compare(password, user.password);

        if (!passValid) {
            return res.status(400).json({
                msg: "The email or password is incorrect"
            });
        }

        const payload = {
            user: {
                id: user.id
            }
        }

        jwt.sign(payload, process.env.SECRET, {
            expiresIn: 36000
        }, (err, token) => {
            if (err) throw err;
            res.json({
                token
            });
        });
    } catch(err) {
        console.log(err);
    }
}
//Get the authenticated user
exports.authenticated = async(req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json({user})
    } catch(err){
        console.log(err);
        res.status(500).json({msg: "There was an error"})
    }


}
