const express = require('express');
const router = express.Router();
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getSingleProduct,
} = require('../controllers/productController.js');
const {
  isAuthenticatedUser,
  authorizedRoles,
} = require('../middlewares/auth.js');

// Get all products
router.get('/products', getAllProducts);

// Get single product

router.get('/products/:id', getSingleProduct);

// Create new product
router.post(
  '/admin/products/new',
  isAuthenticatedUser,
  authorizedRoles('admin'),
  createProduct
);

//Update existing product
router.put(
  '/admin/products/:id',
  isAuthenticatedUser,
  authorizedRoles('admin'),
  updateProduct
);

//Delete existing product

router.delete(
  '/admin/products/:id',
  isAuthenticatedUser,
  authorizedRoles('admin'),
  deleteProduct
);

module.exports = router;
