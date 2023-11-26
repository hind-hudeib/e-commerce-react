// routes/userRoute.js
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productsController');

// get all products
router.get('/products', productController.getAllProducts);

// add new product
router.post('/products', productController.addProduct);

// update one product
router.put('/products/:id', productController.updateProduct);




module.exports = router;
