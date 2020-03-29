const express = require("express");
const Router = express.Router();
const AuthController = require("../controllers/authController");

Router.get("/login", AuthController.login);
Router.get("/register", AuthController.register);
Router.post("/register", AuthController.signUp);
Router.post("/login", AuthController.signIn);
Router.get("/logout", AuthController.signOut);
module.exports = Router;