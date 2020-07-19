const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
    //read the token in the header 
    const token = req.header('x-auth-token');
    if (!token ) {
        res.status(401).json({
            msg: "No token provider"
        })

    }
    try {
        const validToken = jwt.verify(token, process.env.SECRET);
        if (validToken) {
            req.user = validToken.user;
            next();
        }
        

    } catch(err) {
        res.status(401).json({
            msg: "Invalid token"
        })

    }
}