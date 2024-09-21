import express from 'express'
import connectDB from './config/db.js'
import ArticleRouter from './routes/ArticleRouter.js'

const app=express()
const port=3000

// Use this middleware to parse json request body
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// Add an endpoint for the router
app.use('/api', ArticleRouter)

connectDB()

app.get('/',(req,res)=>{
    res.send({message:"Hello from an express API"})
})

app.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}`)
})