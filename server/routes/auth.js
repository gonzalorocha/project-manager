const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const authController = require('./../controllers/authController');

//api/auth
router.post(
    "/",
    [
        check("email", "Enter a valid email").isEmail(),
    ],
    authController.authUser
);


module.exports = router;