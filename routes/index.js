module.exports = app => {

    const indexRoutes = require("./index.routes");
    app.use("/", indexRoutes);

    const usersRoutes = require("./users.routes");
    app.use("/", usersRoutes);

    const authRoutes = require("./auth.routes");
    app.use("/", authRoutes);

    const moviesRoutes = require("./movies.routes");
    app.use("/", moviesRoutes);

    const apimovieRoutes = require("./apimovies.routes");
    app.use("/", apimovieRoutes);

    const commentRoutes = require("./comment.routes");
    app.use("/", commentRoutes);

}