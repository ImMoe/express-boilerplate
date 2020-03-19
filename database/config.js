const mongoose = require("mongoose");
/* Database connection (Driver => MongoDB) */
const connection = mongoose
  .connect(`${process.env.DB_HOST}${process.env.DB_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(connected => console.log("Connected successfully!"))
  .catch(notConnected =>
    console.log("Database not connected: " + notConnected)
  );

module.exports = connection;
