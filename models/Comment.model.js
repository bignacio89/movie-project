const { Schema, model } = require("mongoose");
const mongoose = require('mongoose');

const commentSchema = new Schema(
    {
        text: {
            type: String,
            trim: true,
            require: true
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

const Comment = model('comment', commentSchema);

module.exports = Comment;

