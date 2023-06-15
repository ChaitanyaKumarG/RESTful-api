const express = require('express')
const router = express.Router();
const mongoose = require('mongoose')
const Product = require('../modals/Products')

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message: "handling get in product"
    })
})

router.post('/',(req,res,next)=>{


    const product = new Product({
        name: req.body.name,
        price: req.body.price,
        expirydate: req.body.expirydate
    })
    product.save().then((result)=>{
    console.log(result)
    }).catch((err)=> console.log(err))


    res.status(201).json({  
        message: "handling post request in product",
        msg: "product created",
        createdProduct : product,
       
    })
})

router.delete('/',(req,res,next)=>{
    res.status(200).json({
        message: "handling delete in product"
    })
})

router.patch('/',(req,res,next)=>{
    res.status(200).json({
        message: "handling patch in product"
    })
})



router.get('/:id',(req,res,next)=>{
    const id = req.params.id
    res.status(200).json({
        message:'fetched product',
        product_id : id
    })
})

router.delete('/:id',(req,res,next)=>{
    const id = req.params.id
    res.status(200).json({
        message:'deleted product',
        product_id : id
    })
})

router.patch('/:id',(req,res,next)=>{
    const id = req.params.id
    res.status(200).json({
        message:'patched product',
        product_id : id
    })

})

router.post('/:id',(req,res,next)=>{
    const id = req.params.id
    res.status(200).json({
        message:'post product',
        product_id : id
    })

})



module.exports = router