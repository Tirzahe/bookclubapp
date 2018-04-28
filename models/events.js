const mongoose = require("mongoose");

const { Schema } = mongoose;

const eventSchema = new Schema({
    date: {
        type: Date,
        required: true
    },
    host: String,
    address: {
        type: String,
        required: true
        //what kind of data type is needed to work with google maps API
    },
    book: {
        title: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true,
        },
        quote: {
            type: String,
            required: true
        }
    }, 
    comments: [{
        date: Date,
        commenter: String,
        chapter: {
            type: String,
            required: true
        },
        text: String,
        // reply: [{
        //     date: Date,
        //     commenter: String,
        //     text: String,
        // }]
    }]
})

module.exports = mongoose.model("Event", eventSchema);
