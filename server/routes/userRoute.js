const express = require('express');
const {
  registerUser,
  loginUser,
  logoutUser,
  forgotPassword,
} = require('../controllers/userController');
const router = express.Router();

router.post('/register', registerUser);

router.post('/login', loginUser);

router.get('/logout', logoutUser);

router.post('/password/forgot', forgotPassword);

module.exports = router;
