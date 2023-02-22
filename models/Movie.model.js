const { Schema, model } = require('mongoose');
const movieSchema = new Schema(
    {
        original_title: {
            type: String,
            required: true,
        },
        release_date: {
            type: String
        },
        runtime: {
            type: String
        },
        genres: {
            type: Array,
            items: {
                type: Object,
                properties: {
                    id: {
                        type: String
                    },
                    name: {
                        type: String
                    }
                }
            }
        },
        overview: {
            type: String
        },
        poster_path: {
            type: String,
            required: true,
        },
        vote_average: {
            type: String
        },
        comments: [{
            ref: 'Comment',
            type: Schema.Types.ObjectId
        }],
    },
    {
        timestamps: true
    }
);
module.exports = model('Movie', movieSchema)