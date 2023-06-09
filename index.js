const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')

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