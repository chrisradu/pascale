const express = require("express");

const routes = require("./routes/taskRoutes");
const logger = require("./middleware/logger");
const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(express.json());

app.use(logger);

app.use("/tasks", routes);

app.use(notFound);

app.use(errorHandler);

module.exports = app;
