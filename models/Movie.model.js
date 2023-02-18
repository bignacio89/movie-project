const { Schema, model } = require('mongoose');
const movieSchema = new Schema(
    {
        Title: {
            type: String,
            required: true,
        },
        Year: {
            type: String
        },
        Runtime: {
            type: String
        },
        Genre: {
            type: String,
            required: true,
        },
        Director: {
            type: String
        },
        Actors: {
            type: String
        },
        Plot: {
            type: String
        },
        Poster: {
            type: String,
            required: true,
        },
        Type: {
            type: String,
            enum: ['movie', 'series'],
            required: true,
        },
        Metascore: {
            type: String
        },
        imdbRating: {
            type: String
        },
        imdbID: {
            type: String
        },
    },
    {
        timestamps: true
    }
);
module.exports = model('Movie', movieSchema)