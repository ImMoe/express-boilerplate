const express = require("express");
const controller = require("../controllers/controller");
const Router = express.Router();

/* Respond to routes with controllers actions */
Router.get("/", controller.index);

module.exports = Router;
