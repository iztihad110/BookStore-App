let express = require("express");
let route = express.Router();
let cors = require("cors");
let books = require("../Models/book.model");

route.use(cors());

route.use(express.urlencoded({extended: true}))
route.use(express.json());

route.get('/', async (req, res)=>{
    try{
        let book = await books.find();
        res.status(200).json(book);
    }
    catch(error){
        alert(error.message);
        res.status(500).json({message: error.message});
    }
})

route.get('/:id', async (req, res)=>{
    try{
        let book = await books.findById(req.params.id);
        res.status(200).json(book);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
})

route.post('/', async (req, res)=>{
    try{
        let newBook = new books(req.body);
        let saveBook = await newBook.save();
        res.status(201).send("Book saved Successfully");
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
})

route.put('/:id', async (req, res)=>{
    try{
        let book = await books.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).send("Data updated successfully");
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
})

route.delete('/:id', async (req, res)=>{
    try{
        let book = await books.findByIdAndDelete(req.params.id);
        res.status(200).send("Data deleted successfully");
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
})

module.exports = route;