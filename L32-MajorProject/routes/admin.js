const path = require('path');
const express = require('express');
const router = express.Router();
const multer = require('multer');
// const upload = multer({ dest: 'uploads/' });
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'uploads')
//     },
//     filename: function (req, file, cb) {
//         const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
//         const extension = path.extname(file.originalname);
//         // console.log("File ", file);
//         cb(null, file.fieldname + '-' + uniqueSuffix + extension);
//     }
// })

const upload = multer({})

const adminController = require('../controllers/admin');
router.get('/addproduct', adminController.getAddProduct);
router.post('/addproduct', upload.single('image'), adminController.postAddProduct);
router.get('/products', adminController.getProducts);
router.get('/editproduct', adminController.getEditProduct);
router.post('/editproduct', upload.single('image'), adminController.postEditProduct);
module.exports = router;