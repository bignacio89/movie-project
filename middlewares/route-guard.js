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

// const canEdit = (req, res, next) => {

//     const user_id = req.session.currentUser._id
//     const {idEdit} = req.params

//     if (req.session.currentUser.role)
// }

module.exports = { isLoggedIn, isLoggedOut, checkRole }