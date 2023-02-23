const isLoggedIn = (req, res, next) => {
    if (req.session.currentUser) {
        next()
    }
    else {
        res.render('auth/login', { errorMessage: 'Log in to continue' })
    }
}

const isLoggedOut = (req, res, next) => {
    if (!req.session.currentUser) {
        next()
    }
    else {
        res.redirect('/user/profile')
    }
}

const checkRole = (...roles) => (req, res, next) => {
    if (roles.includes(req.session.currentUser.role)) {
        next()
    }
    else {
        res.render('auth/login', { errorMessage: 'Only Admin' })
    }
}

const editMyFav = (req, res, next) => {
    const { user_id } = req.params
    if (req.session.currentUser._id === user_id) {
        next()
    }
    else {
        res.render('auth/login', { errorMessage: 'Only creator' })
    }
}

module.exports = { isLoggedIn, isLoggedOut, checkRole, editMyFav }