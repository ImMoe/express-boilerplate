/**
 * @index => Start
 * @show => Show single
 * @create => Insert queries
 * @update => Update query
 * @destroy => Remove query from database
 */

const Message = require("../models/Message");

exports.index = (req, res) => {
  // const firstMessage = new Message({ message: "Hello World!" });
  // firstMessage.save();
  res.render("index");
};
