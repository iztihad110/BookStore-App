let express = require("express");
let app = express();
let router = require("./Routes/book.route");
let mongoose = require("mongoose");

app.use('/books', router);

mongoose.connect("mongodb://localhost:27017/bookstore")
.then(()=>{
    console.log("MongoDB database was connected");
})
.catch((error)=>{
    console.log(error.message);
})

module.exports = app;
