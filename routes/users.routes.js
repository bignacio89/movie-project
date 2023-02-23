const express = require('express');
const { isLoggedIn, isLoggedOut, checkRole } = require('../middlewares/route-guard');
const uploaderMiddleware = require('../middlewares/uploader');
const router = express.Router();
const User = require('../models/User.model')
const axios = require("axios")
const MovieApi = require('../services/movies.services')
const Comment = require('./../models/Comment.model')

const movieApi = new MovieApi()

router.get('/user/list', isLoggedIn, (req, res, next) => {

    User
        .find()
        .select({ username: 1, avatar: 1, description: 1 })
        .sort({ username: 1 })
        .then(users => res.render('user/list', { users }))
        .catch(err => next(err))
})


// Render user profile
router.get('/user/:id', isLoggedIn, (req, res, next) => {

    const { id } = req.params

    User
        .findById(id)
        .then(user => {
            const isADMIN = req.session.currentUser?.role === 'ADMIN'
            const recomMovies = user.recommendations.map(elm => {
                return movieApi.getMovieById(elm)
            })
            const isDelete = req.session.currentUser._id === id
            Promise
                .all(recomMovies)
                .then((movies) => {
                    res.render('user/profile', { user, movies, isADMIN, isDelete })
                })
        })
        .catch(err => next(err))
})


// Edit form render
router.get('/user/:id/edit', isLoggedIn, checkRole('ADMIN'), (req, res, next) => {

    const { id } = req.params

    User
        .findById(id)
        .then(user => res.render('user/edit', user))
        .catch(err => next(err))
})


// Edit form handler
router.post('/user/:id/edit', isLoggedIn, checkRole('ADMIN'), uploaderMiddleware.single('avatar'), (req, res, next) => {

    const { id } = req.params
    const { username, email, description } = req.body
    const { path: avatar } = req.file

    User
        .findByIdAndUpdate(id, { username, email, avatar, description })
        .then(() => res.redirect(`/user/list`))
        .catch(err => next(err))
})



// Delete user
router.post('/user/:id/delete', isLoggedIn, checkRole('ADMIN'), (req, res, next) => {

    const { id } = req.params

    User
        .findByIdAndDelete(id)
        .then(() => res.redirect('/user/list'))
        .catch(err => next(err))
})


module.exports = router