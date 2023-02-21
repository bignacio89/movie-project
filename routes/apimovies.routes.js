const express = require('express');
const router = express.Router();
const axios = require("axios")


const MovieApi = require('../services/movies.services')

const movieApi = new MovieApi()

// random movie page

router.get('/movies/search', (req, res, next) => {
    res.render('movie/random-form')
})

router.get('/movies/random', (req, res, next) => {

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

// router.get('/movies/random', (req, res, next) => {
//     const id = req.query.id
//     console.log('ESTE ES EL CODIGO PARA LA PELI...', id)

//     movieApi
//         .getMovie(id)
//         .then(movies => {
//             res.render('movie/movie-details', movies)
//         })
//         .catch(err => next(err))
// })


module.exports = router