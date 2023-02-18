const router = require("express").Router()
const bcrypt = require('bcryptjs')
const User = require("../models/User.model")
const saltRounds = 10

//Sign Up

router.get('/signup', (req, res, next) => res.render('auth/singup'))

router.post('/signup', (req, res, next) => {

    const { userPwd } = req.body

    bcrypt
        .genSalt(saltRounds)
        .then(salt => bcrypt.hash(userPwd, salt))
        .then(hashedPassword => User.create({ ...req.body, password: hashedPassword }))
        .then(createdUser => res.redirect('/'))
        .catch(err => next(err))
})

//Log In

router.get('/login', (req, res, next) => res.render('auth/login'))

router.post('/login', (req, res, next) => {

    const { email, userPwd } = req.body

    User
        .findOne({ email })
        .then(user => {
            if (!user) {
                res.render('auth/login', {
                    errorMessage: 'Email not registered in the Database'
                })
                return
            }
            else if (bcrypt.compareSync(userPwd, user.password) === false) {
                res.render('auth/login', { errorMessage: 'Incorrect password.' })
                return
            }
            else {
                req.session.currentUser = user
                res.redirect('/')
            }
        })
        .catch(err => next(err))
})

// Log Out

router.post('/logout', (req, res, next) => {
    req.session.destroy(() => res.redirect('/'))
})

module.exports = router