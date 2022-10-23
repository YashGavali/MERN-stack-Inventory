const express = require('express');
const {
  newOrder,
  getSingleOrder,
  myOrder,
  getAllOrder,
  updateOrder,
  deleteOrder,
} = require('../controllers/orderController');
const router = express.Router();

const { isAuthenticatedUser, authorizedRoles } = require('../middlewares/auth');

router.post('/order/new', isAuthenticatedUser, newOrder);

router.get('/order/:id', isAuthenticatedUser, getSingleOrder);

router.get('/orders/me', isAuthenticatedUser, myOrder);

router.get(
  '/admin/orders',
  isAuthenticatedUser,
  authorizedRoles('admin'),
  getAllOrder
);

router.put(
  '/admin/order/:id',
  isAuthenticatedUser,
  authorizedRoles('admin'),
  updateOrder
);

router.delete(
  '/admin/order/:id',
  isAuthenticatedUser,
  authorizedRoles('admin'),
  deleteOrder
);

module.exports = router;
