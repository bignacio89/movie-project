const express = require('express');
const { isLoggedIn, isLoggedOut, checkRole } = require('../middlewares/route-guard');
const router = express.Router();
const User = require('../models/User.model')

router.get('/user/list', isLoggedIn, (req, res, next) => {

    User
        .find()
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
            res.render('user/profile', {
                user, isADMIN
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
router.post('/user/:id/edit', isLoggedIn, checkRole('ADMIN'), (req, res, next) => {
    const { id } = req.params
    const { username, email, avatar, description } = req.body

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