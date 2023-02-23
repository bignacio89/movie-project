module.exports = app => {

    const indexRoutes = require("./index.routes")
    app.use("/", indexRoutes)

    const infoRoutes = require("./info.routes")
    app.use("/", infoRoutes)

    const usersRoutes = require("./users.routes")
    app.use("/", usersRoutes)

    const authRoutes = require("./auth.routes")
    app.use("/", authRoutes)

    const moviesRoutes = require("./movies.routes")
    app.use("/", moviesRoutes)

    const apimovieRoutes = require("./apimovies.routes")
    app.use("/", apimovieRoutes)

    const commentRoutes = require("./comment.routes")
    app.use("/", commentRoutes)

}