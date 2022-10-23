const express = require('express');
const {
  registerUser,
  loginUser,
  logoutUser,
  forgotPassword,
  resetPassword,
  getUserDetails,
  updatePassword,
  updateProfile,
  getAllUsers,
  getSingleUser,
  updateUserRole,
  deleteUser,
} = require('../controllers/userController');

const { isAuthenticatedUser, authorizedRoles } = require('../middlewares/auth');

const router = express.Router();

router.post('/register', registerUser);

router.post('/login', loginUser);

router.get('/logout', logoutUser);

router.post('/password/forgot', forgotPassword);

router.put('/password/reset/:token', resetPassword);

router.get('/me', isAuthenticatedUser, getUserDetails);

router.put('/password/update', isAuthenticatedUser, updatePassword);

router.put('/me/update', isAuthenticatedUser, updateProfile);

router.get(
  '/admin/users',
  isAuthenticatedUser,
  authorizedRoles('admin'),
  getAllUsers
);

router.get(
  '/admin/user/:id',
  isAuthenticatedUser,
  authorizedRoles('admin'),
  getSingleUser
);

router.put(
  '/admin/user/:id',
  isAuthenticatedUser,
  authorizedRoles('admin'),
  updateUserRole
);

router.delete(
  '/admin/user/:id',
  isAuthenticatedUser,
  authorizedRoles('admin'),
  deleteUser
);

module.exports = router;
