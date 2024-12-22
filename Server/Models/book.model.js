let mongoose = require("mongoose");

let bookSchema = new mongoose.Schema(
    {
        title:{
            type: String,
            required: true
        },
        author:{
            type: String,
            required: true
        },
        publishYear:{
            type: Number,
            required: true
        },
        Introduction:{
            type: String
        }

    }
)

module.exports = mongoose.model('book', bookSchema);