const express = require('express');
const router = express.Router();
const Comment = require('./../models/Comment.model')
const Movie = require('../models/Movie.model')
const { isLoggedIn, isLoggedOut, checkRole } = require('../middlewares/route-guard');




router.get('/comments', (req, res, next) => {
    Comment
        .find()
        .then(comment => res.render('movie/movie-details', { comment }))
        .catch(err => next(err))
})

router.post('/comments', isLoggedIn, (req, res, next) => {



    const { text, movie } = req.body
    const owner = req.session.currentUser._id

    Comment
        .create({ text, movie, owner })
        .then(() => res.redirect(`/movie/${movie}/details`))
        .catch(err => next(err))
})

router.post('/comments/:id/delete', isLoggedIn, (req, res, next) => {
    const { movie } = req.body
    const { id } = req.params

    Comment
        .findByIdAndDelete(id)
        .then(() => res.redirect(`/movie/${movie}/details`))
        .catch(err => next(err))
})




module.exports = router
