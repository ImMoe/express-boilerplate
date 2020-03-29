const User = require("../models/User");
/* 
  Every controller action should pass a user 
  object to view for navigation to work properly. 
*/
exports.index = async (req, res) => {
  const user = await User.findOne({ email: req.session.isAuthenticated });
  res.render("index", { user });
};
