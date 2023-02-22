const express = require('express');
const router = express.Router();
const axios = require("axios")
const { isLoggedIn, isLoggedOut, checkRole } = require('../middlewares/route-guard');
const Comment = require('./../models/Comment.model')
const Movie = require('../models/Movie.model')
const MovieApi = require('../services/movies.services')

const movieApi = new MovieApi()

const User = require('./../models/User.model')

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

// details movies

router.get('/movie/:movie_id/details', (req, res, next) => {
    const { movie_id } = req.params

    movieApi
        .getMovie(movie_id)
        .then((movie) => {
            Comment
                .find({ movie: movie_id })
                .then((comments) => res.render('movie/movie-details', { movie, comments }))
        })
        .catch(err => next(err))
})

// add movie to user recommendations 

router.post('/favorites/:movie_id', isLoggedIn, (req, res, next) => {
    const { movie_id } = req.params
    const user_id = req.session.currentUser._id

    User
        .findByIdAndUpdate(user_id, { $addToSet: { recommendations: movie_id } })
        .then(() => res.redirect(`/user/${user_id}`))
        .catch(err => next(err))

})

module.exports = router