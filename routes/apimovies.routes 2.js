const express = require('express');
const router = express.Router();
const axios = require("axios")


const MovieApi = require('../services/movies.services')

const movieApi = new MovieApi()

// search random movie page

router.get('/movie/search', (req, res, next) => {
    res.render('movie/random-form')
})

router.get('/movie/random', (req, res, next) => {

    const year = req.query.year
    const rate = req.query.rate
    const genre = req.query.genre

    movieApi
        .getRandom(year, rate, genre)
        .then(data => {
            const movies = data.results
            res.render('movie/list-random', { movies })
        })
        .catch(err => next(err))

})

module.exports = router