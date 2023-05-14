const mongoose = require('mongoose')

const newSchema = new mongoose.Schema({
    email:{type: String} 
})

const test = new mongoose.model('products', newSchema)

module.exports = test