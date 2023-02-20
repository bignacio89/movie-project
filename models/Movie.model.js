const { Schema, model } = require('mongoose');
const movieSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        year: {
            type: String
        },
        runtime: {
            type: String
        },
        genre: {
            type: String,
            required: true,
        },
        director: {
            type: String
        },
        actors: {
            type: String
        },
        plot: {
            type: String
        },
        poster: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            enum: ['movie', 'series'],
            required: true,
        },
        metascore: {
            type: String
        },
        imdbRating: {
            type: String
        },
        imdbID: {
            type: String
        },
        owner: {
            type: String
        }
    },
    {
        timestamps: true
    }
);
module.exports = model('Movie', movieSchema)