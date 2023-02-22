require("dotenv").config();
require("./db");
const express = require("express");
const hbs = require("hbs");
const app = express();

require("./config")(app);
require('./config/session.config')(app);


// 👇 Start handling routes here
const indexRoutes = require("./routes/index.routes");
app.use("/", indexRoutes);

const usersRoutes = require("./routes/users.routes");
app.use("/", usersRoutes);

const authRoutes = require("./routes/auth.routes");
app.use("/", authRoutes);

const moviesRoutes = require("./routes/movies.routes");
app.use("/", moviesRoutes);

const apimovieRoutes = require("./routes/apimovies.routes");
app.use("/", apimovieRoutes);

const commentRoutes = require("./routes/comment.routes");
app.use("/", commentRoutes);

require("./error-handling")(app);

module.exports = app;
