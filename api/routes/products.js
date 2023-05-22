const express = require('express')
const router = express.Router();

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message: "handling get in product"
    })
})

router.post('/',(req,res,next)=>{
    res.status(201).json({
        message: "handling post in product"
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