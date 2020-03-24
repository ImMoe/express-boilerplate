const express = require("express");
const controller = require("../controllers/controller");
const Router = express.Router();

/* Respond to routes with controllers actions */
Router.get("/", controller.index);
Router.get("/create", controller.create);
Router.post("/create", controller.store);
Router.get("/edit/:id", controller.edit);
Router.put("/edit", controller.update);
Router.delete("/delete", controller.destroy);

module.exports = Router;    