const express = require("express");
const bodyParser = require("body-parser");
const webRoutes = require("./routes/web");

/* Default settings for express */
const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

/* Default routes */
app.use("/", webRoutes);

/* Start server with port specified */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server started on port 3000"));