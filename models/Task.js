const mongoose = require("mongoose");
const TaskSchema = mongoose.Schema({
    title: String,
    body: String,
    created: { type: Date, default: Date.now}
});

module.exports = mongoose.model("Task", TaskSchema);