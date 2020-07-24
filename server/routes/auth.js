const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const verify = require('./../middleware/verify')
const authController = require('./../controllers/authController');

//api/auth
router.get("/", verify, authController.authenticated);

router.post( "/", authController.authUser );


module.exports = router;