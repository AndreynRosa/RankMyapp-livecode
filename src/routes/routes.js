const express = require("express");
const RickAndMortyController = require("../controller/RickAndMortyController")


const routes = express.Router();


routes.get("", RickAndMortyController.teste);

module.exports = app => app.use("", routes);