const express = require('express')
const router = express.Router();

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message: "handling order by get"
    })
})

router.post('/',(req,res,next)=>{
    res.status(201).json({
        message: "handling orders by post"
    })
})

router.patch('/',(req,res,next)=>{
    res.status(201).json({
        message: "handling orders by patch"
    })
})

router.delete('/',(req,res,next)=>{
    res.status(201).json({
        message: "handling orders by delete"
    })
})

router.get('/:id',(req,res,next)=>{
    const id = req.params.id
    res.status(200).json({
        message: "orders fetched",
        orderId : id
    })
})

router.post('/:id',(req,res,next)=>{
    const id = req.params.id
    res.status(201).json({
        message:"order posted",
        orderId: id
    })
})

router.delete('/:id',(req,res,next)=>{
    const id = req.params.id
    res.status(200).json({
        message:"order deleted",
        orderId: id
    })
})
router.patch('/:id',(req,res,next)=>{
    const id = req.params.id
    res.status(200).json({
        message:"order patched",
        orderId :id
    })
})



module.exports = router