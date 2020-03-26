/**
 * @index => Start
 * @show => Show single
 * @create => Insert queries
 * @update => Update query
 * @destroy => Remove query from database
 */

exports.index = async (req, res) => {
  res.render("index");
};
