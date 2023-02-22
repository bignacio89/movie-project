const express = require('express');
const { isLoggedIn, isLoggedOut, checkRole } = require('../middlewares/route-guard');
const uploaderMiddleware = require('../middlewares/uploader');
const router = express.Router();
const Movie = require('../models/Movie.model')

router.get('/movies/list', (req, res, next) => {
    Movie
        .find()
        .then(movies => res.render('movies/list', { movies }))
        .catch(err => next(err))
})

router.get('/movies/create', (req, res, next) => {
    Movie
        .find()
        .then(movies => res.render('movies/create', { movies }))
        .catch(err => next(err))
})

router.post('/movies/create', uploaderMiddleware.single('poster'), (req, res, next) => {
    const { original_title, release_date, runtime, genres, overview, vote_average } = req.body
    const { path: poster_path } = req.file

    Movie
        .create({ original_title, release_date, runtime, genres, overview, poster_path, vote_average })
        .then(() => res.redirect('/movies/list'))
        .catch(err => next(err))
})

router.get('/movies/:id', (req, res, next) => {

    const { id } = req.params

    Movie
        .findById(id)
        .then(movies => res.render('movies/details', { movies }))
        .catch(err => next(err))
})


router.get('/movies/:id/edit', (req, res, next) => {

    const { id } = req.params

    Movie
        .findById(id)
        .then(movies => res.render('movies/edit', movies))
        .catch(err => next(err))
})


router.post('/movies/:id/edit', uploaderMiddleware.single('poster'), (req, res, next) => {
    const { id } = req.params
    const { original_title, release_date, runtime, genres, overview, vote_average } = req.body
    const { path: poster_path } = req.file

    Movie
        .findByIdAndUpdate(id, { original_title, release_date, runtime, genres, overview, vote_average, poster_path })
        .then(() => res.redirect(`/movies/list`))
        .catch(err => next(err))
})


router.post('/movies/:id/delete', (req, res, next) => {

    const { id } = req.params

    Movie
        .findByIdAndDelete(id)
        .then(() => res.redirect('/movies/list'))
        .catch(err => next(err))
})

module.exports = router;