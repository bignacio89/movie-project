const { Schema, model } = require("mongoose");
const mongoose = require('mongoose');

const commentSchema = new Schema(
    {
        text: {
            type: String,
            trim: true,
            required: true
        },
        movie: {
            type: String
        },
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    },
    {
        timestamps: true
    }
);

const Comment = model('Comment', commentSchema);

module.exports = Comment;

