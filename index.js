const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')


mongoose.connect("mongodb+srv://chaitanya:chaitu9075@cp-med-store.lvufinl.mongodb.net/medicines?retryWrites=true&w=majority").then(
    ()=>
    console.log('Connected to db')
).catch(()=>console.log('Not connected to db'))

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())


app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-Origin','Content-type,Accept,Origin,X-Requested-With,Authorization')
    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Origin','PUT,GET,PATCH,DELETE,POST')
        return res.status(200).json({})
    }
    next()
})



const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');

app.use(morgan('dev'))

app.use('/products', productRoutes)
app.use('/orders', orderRoutes)





module.exports = app