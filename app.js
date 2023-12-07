const express = require("express");
const exphbs = require("express-handlebars");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const Sequelize = require("sequelize");
const { dbName, dbUser, dbPwd } = require("./database/utils/configDB");
const db = require("./database/db");

//Testing connection to our database.
db.authenticate()
  .then(() => console.log("database connected!"))
  .catch((err) => console.log("Error " + err));

const app = express();

app.get("/", (req, res) => res.send("INDEX"));
app.use(cors({ origin: "*" }));
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
//Book routes
app.use("/", require("./routes/books"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
