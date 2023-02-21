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
    const { title, year, runtime, genre, director, actors, plot, type, metascore, imdbRating, imdbID, owner } = req.body
    const { path: poster } = req.file

    Movie
        .create({ title, year, runtime, genre, director, actors, plot, poster, type, metascore, imdbRating, imdbID, owner })
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
    const { title, year, runtime, genre, director, actors, plot, type, metascore, imdbRating, imdbID, owner } = req.body
    const { path: poster } = req.file

    Movie
        .findByIdAndUpdate(id, { title, year, runtime, genre, director, actors, plot, poster, type, metascore, imdbRating, imdbID, owner })
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