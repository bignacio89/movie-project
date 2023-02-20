const { Schema, model } = require("mongoose");
const mongoose = require('mongoose');

const userSchema = new Schema(
  {
    username: {
      type: String,
      trim: true,
      required: false,
      unique: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },
    password: {
      type: String,
      required: true
    },
    avatar: {
      type: String,
    },
    description: {
      type: String
    },
    role: {
      type: String,
      enum: ['ADMIN', 'USER'],
      default: 'USER'
    },
    recommendations: [{
      imdbID: String,
      title: String,
      year: Number,
      runtime: String,
      genre: String,
      director: String,
      actors: String,
      plot: String,
      poster: String,
      type: String,
      metascore: String,
      imdbRating: String,
      comments: [{
        type: mongoose.Schema.Types.ObjectID,
        ref: 'Comment'
      }]
    }]
  },
  {
    timestamps: true
  }
);

const User = model("User", userSchema);

module.exports = User;
