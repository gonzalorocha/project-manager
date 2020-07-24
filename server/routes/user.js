const express = require('express'); 
const router = express.Router();

const userController = require('./../controllers/userController');
const { check } = require('express-validator');

//api/user
router.post(
  "/",
  [
    //Validate 
    check("name", "Name is require").not().isEmpty(),
    check("email", "Enter a valid email").isEmail(),
    check("password", "The password must have at least 6 character").isLength({ min: 6}),
  ],
  userController.createUser
);

module.exports = router;