const express = require('express')
const cors = require('cors')
const connectDB = require('./db')
const app = express()
const test = require('./schema')
app.use(express.urlencoded({extended:true}))
// const { Collection } = require('mongodb')
// const { Collection } = require('mongoose')
app.use(cors())
app.use(express.json())
connectDB()
 app.post('/test', async (req, res)=> {
 const {email} = req.body
 const data ={
    email:email
 }
 await connectDB.insertMany([data])
 })

app.listen(5000, ()=> {
    console.log('Server is running on 5000')
})