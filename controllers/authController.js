const bcrypt = require("bcrypt");
const saltCount = 10;
const validator = require("validator");
const User = require("../models/User");

exports.login = async (req, res) => {
    if (req.session.isAuthenticated) {
        res.redirect("/");
    } else {
        const user = await User.findOne({ email: req.session.isAuthenticated });
        res.render("login", { errors: [], user })
    }
};
exports.register = async (req, res) => {
    if (req.session.isAuthenticated) {
        res.redirect("/");
    } else {
        const user = await User.findOne({ email: req.session.isAuthenticated });
        res.render("register", { errors: [], old: [], user });
    }
};
exports.signUp = async (req, res) => {
    const user = await User.findOne({ email: req.session.isAuthenticated });
    const { username, email, password } = req.body;
    const { isEmpty, isEmail, isAlphanumeric } = validator;

    const errors = [];

    if (isEmpty(username) || isEmpty(email) || isEmpty(password)) {
        errors.push({ message: "Please fill in all fields required." });
    }
    if (!isEmail(email)) {
        errors.push({ message: "Please enter a valid email." });
    }
    if (!isAlphanumeric(username)) {
        errors.push({ message: "Username can only be alphanumeric!" });
    }
    if (password.length <= 6) {
        errors.push({ message: "Your password has to bee atleast 6 characters long." });
    }
    const findUser = await User.findOne({ email });
    if (findUser) {
        errors.push({ message: "User with that email already exists." });
    }

    if (errors.length > 0) {
        res.render("register", {
            errors,
            old: req.body,
            user
        });
    } else {
        bcrypt.hash(password, saltCount, function (err, hashed) {
            const user = new User({
                username,
                password: hashed,
                email: email.toLowerCase(),
            });
            user.save();
            res.redirect("/auth/login");
        });
    }
}
exports.signIn = async (req, res) => {
    const user = await User.findOne({ email: req.session.isAuthenticated });
    const { email, password } = req.body;
    const errors = [];

    const result = await User.findOne({ email: email.toLowerCase() });
    if (!result) {
        errors.push({ message: "No user found with that email." })
    }
    if (errors.length > 0) {
        res.render("login", { errors, user });
    }
    bcrypt.compare(password, result.password, function (err, same) {
        if (same) {
            req.session.isAuthenticated = email;
            console.log(req.session);
            res.redirect("/");
        } else {
            res.redirect("/auth/login");
        }
    });

}
exports.signOut = (req, res) => {
    req.session.isAuthenticated = null;
    res.redirect("/");
}