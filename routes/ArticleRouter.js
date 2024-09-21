import express from 'express'
import ArticleModel from '../models/article.js'
const router=express.Router()

// POST method on router
router.post('/articles',async(req,res)=>{
    const article=new ArticleModel(req.body)
    try{
        await article.save()
        res.send(article)
    }
    catch(error){
        res.status(500).send(error)
    }
})

// GET method on router
router.get('/articles',async(req,res)=>{
    try
    {
        const results=await ArticleModel.find({})
        res.send(results)
    }
    catch(error){
        res.status(500).send(error)
    }
})

// Get method for a single article by id
router.get('/articles/:id',async(req,res)=>{
    try{
        const article=await ArticleModel.findOne({_id:req.params.id})
        res.send(article)
    }
    catch(error)
    {
        res.status(404).send(error)
    }
})

//patch method to update
router.patch('/articles/:id',async(req,res)=>{
    try{
        const article=await ArticleModel.findByIdAndUpdate(req.params.id,req.body)
        await article.save()
        res.send(article)
    }
    catch(error)
    {
        res.status(500).send(error)
    }
})

//delete method to delete an article
router.delete('/articles/:id',async(req,res)=>{
    try{
        const article=await ArticleModel.findByIdAndDelete(req.params.id)
        if(!article){
            // Article was deleted
            res.status(404).send("Article was not found")
        }
        res.status(204).send(article)
    }
    catch(error)
    {
        res.send(500).send(error)
    }
})

export default router