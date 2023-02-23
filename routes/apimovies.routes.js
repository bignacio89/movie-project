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

router.get('/movie/search-random', (req, res, next) => {
    res.render('movie/random-form')
})


router.get('/movie/random', (req, res, next) => {

    const { year, rate, genre } = req.query

    movieApi
        .getRandom(year, rate, genre)
        .then(response => {
            const movies = response.data.results
            res.render('movie/list-random', { movies })
        })
        .catch(err => next(err))
})


//search for title
router.get('/movie/search', (req, res, next) => {

    const { search } = req.query

    movieApi
        .searchMovie(search)
        .then(response => {
            const movies = response.data.results
            res.render('movie/list-search', { movies })
        })
        .catch(err => next(err))

})


// details movies

router.get('/movie/:movie_id/details', (req, res, next) => {

    const { movie_id } = req.params

    movieApi
        .getMovieById(movie_id)
        .then((response) => {
            Comment
                .find({ movie: movie_id })
                .populate('owner')
                .then((comments) => res.render('movie/movie-details', { movie: response.data, comments }))
        })
        .catch(err => next(err))

})


// add movie to user recommendations 

router.post('/recommendations/:movie_id/:search', isLoggedIn, (req, res, next) => {

    const { movie_id } = req.params
    const { _id: user_id } = req.session.currentUser

    User
        .findByIdAndUpdate(user_id, { $addToSet: { recommendations: movie_id } })
        .then(() => res.redirect(`/movie/search-random`))
        .catch(err => next(err))

})


module.exports = router