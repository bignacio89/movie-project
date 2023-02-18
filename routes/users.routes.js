const express = require('express');
const router = express.Router();
const User = require('../models/User.model')

router.get('/user/list', (req, res) => {

    User
        .find()
        .then(users => res.render('user/list', { users }))
        .catch(err => next(err))
})

// Render user profile
router.get('/user/:id', (req, res) => {

    const { id } = req.params

    User
        .findById(id)
        .then(user => res.render('user/profile', user))
        .catch(err => next(err))
})


// Edit form render
router.get('/user/:id/edit', (req, res) => {

    const { id } = req.params

    User
        .findById(id)
        .then(user => res.render('user/edit', user))
        .catch(err => next(err))
})


// Edit form handler
router.post('/user/:id/edit', (req, res) => {

    const { username, email, avatar, description, id } = req.body

    User
        .findByIdAndUpdate(id, { username, email, avatar, description })
        .then(user => res.redirect(`/user/list`))
        .catch(err => next(err))
})



// Delete user
router.post('/user/:id/delete', (req, res) => {

    const { id } = req.params

    User
        .findByIdAndDelete(id)
        .then(() => res.redirect('/user/list'))
        .catch(err => next(err))
})


module.exports = router