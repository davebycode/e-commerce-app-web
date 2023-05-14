const mongoose = require('mongoose')
const URI = 'mongodb+srv://Davidbycode:davidgomez2002@cluster0.hp2gkpj.mongodb.net/mydb'


const connectDB = ()=>{
   try{
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology:true
    })
    console.log('very successful')
   }
   catch {
console.log('error')
   }
    
}
module.exports = connectDB