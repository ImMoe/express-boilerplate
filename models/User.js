const mongoose = require("mongoose");

const UserSchema = {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    created_at: { type: String, default: new Date().toDateString() },
    updated_at: { type: String, default: new Date().toDateString() }
};

module.exports = mongoose.model("User", UserSchema);