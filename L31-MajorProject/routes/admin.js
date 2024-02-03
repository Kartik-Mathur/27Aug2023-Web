const path = require('path');
const express = require('express');
const router = express.Router();

router.get('/addproduct',(req,res,next)=>{
    res.render('admin/addproduct');
});


module.exports=router;