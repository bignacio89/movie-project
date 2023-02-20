const { Schema, model } = require("mongoose");
const mongoose = require('mongoose');

const commentSchema = new Schema(
    {
        text: {
            type: String,
            trim: true,
            require: true
        },
        date: {
            type: Date,
            default: Date.now
        },
        movie: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Movie',
        },
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    }
);

const Comment = model("Comment", commentSchema);

module.exports = Comment;