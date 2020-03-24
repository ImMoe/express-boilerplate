/**
 * @index => Start
 * @show => Show single
 * @create => Insert queries
 * @update => Update query
 * @destroy => Remove query from database
 */

const Task = require("../models/Task");

exports.index = async (req, res) => {
  const posts = await Task.find();
  res.render("index", {posts});
}
exports.create = (req, res) => {
  res.render("create");
};
exports.store = (req, res) => {
  const obj = new Task(req.body);
  obj.save();
  res.redirect("/");
}
exports.edit = async (req, res) => {
  const task = await Task.findOne({_id: req.params.id});
  res.render("edit", {task})
}

exports.update = async (req, res) => {
  const {id, title, body} = req.body;
  Task.updateOne({_id: id}, {$set: {title, body}}).then(() => {
    res.redirect("/");
  }).catch(error => console.log(error));
}

exports.destroy = (req, res) => {
  const {id} = req.body;
  Task.deleteOne({_id: id}).then(() => {
    res.redirect("/");
  }).catch(error => console.log(error));
}
