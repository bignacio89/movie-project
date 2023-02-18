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
      enum: ['admin', 'user'],
      default: 'user'
    },
    recommendations: [{
      imdbID: String,
      Title: String,
      Year: Number,
      Runtime: String,
      Genre: String,
      Director: String,
      Actors: String,
      Plot: String,
      Poster: String,
      Type: String,
      Metascore: String,
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
