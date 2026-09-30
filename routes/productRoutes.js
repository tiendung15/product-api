const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// GET /api/products - Lấy tất cả sản phẩm
router.get('/', productController.getAllProducts);

// GET /api/products/:pid - Lấy 1 sản phẩm theo pid
router.get('/:pid', productController.getProductById);

// POST /api/products - Tạo sản phẩm mới
router.post('/', productController.createProduct);

// PUT /api/products/:pid - Cập nhật sản phẩm theo pid
router.put('/:pid', productController.updateProduct);

// DELETE /api/products/:pid - Xóa sản phẩm theo pid
router.delete('/:pid', productController.deleteProduct);

module.exports = router;