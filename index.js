const express = require("express");
const path = require("path");
// const fileUpload = require("express-fileupload");
// const cors = require("cors");
const connection = require("./app/config/database");

const mainRouter = require("./app/routers/ProgramRouter/ProgramRouter");

const app = express();

// app.use(cors());
// app.use(fileUpload());
app.use(express.static("public"));
app.use(express.json()); 
app.use(express.urlencoded({ extended: false })); 

// http router
app.use(mainRouter);

// static router
app.use("/static", express.static(path.join(__dirname, "static")));
app.set("views", path.join(__dirname, "./static"));

const port = 3000;
app.listen(port, function () {
  console.log("Server started on", port);
  connection
    .authenticate()
    .then(function () {
      console.log("Database connected");
    })
    .catch(function (err) {
      console.log("Error connecting to Database", err);
      process.exit(1);
    });
});
