const mongoose = require('mongoose')

const productSchema = mongoose.Schema({

    name:String,
    expirydate:String,
    price:Number
    

})


module.exports = mongoose.model('Products',productSchema)