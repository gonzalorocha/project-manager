const bcryptjs = require("bcryptjs");  
const User = require('./../models/User');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

exports.createUser = async(req, res) => {

    const error = validationResult(req);

    if(!error.isEmpty()) {
        return res.status(400).json({ errors: error.array() });
    }

    const { email, password } = req.body;

    try {   
        let user = await User.findOne({ email });

        if (user) {
            res.status(400).json({
                msg: "The email has already been taken"
            })
        }

        user = new User(req.body);
        
        //hash password
        const salt = await bcryptjs.genSalt(10);

        user.password = await bcryptjs.hash(password, salt);

        await user.save();

        //create web token 
        const payload = {
            user: {
                id: user.id
            }
        }

        jwt.sign(payload, process.env.SECRET, {
            expiresIn: 36000
        }, (err, token) => {
            if (err) throw err;
            res.json({ token });
        });
    } catch(err) {
        console.log(err);
        res.status(400).send('There was an error');
    }
}