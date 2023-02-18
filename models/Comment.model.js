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
        imdbId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Movie',
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    }
);

const Commment = model("Comment", commentSchema);

module.exports = Comment;