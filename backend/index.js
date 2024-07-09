const express = require("express");
const app = express(); //initialising/starting app
const bodyParser = require("body-parser");
const cors = require("cors");
const AuthRoutes = require("./Routes/AuthRoutes");
const ProductRoutes = require("./Routes/ProductRoutes");

require("dotenv").config(); //getting environment  variable
require("./Connections/db");
const PORT = process.env.port || 8080; // it will fetch port form .env or || it will show 8080

app.get("/ping", (req, res) => {
  // to test our server is running?
  res.send("PONG");
});

app.use(bodyParser.json());
app.use(cors()); // can add congiguration object to allow only particular ips to access
app.use("/auth", AuthRoutes);
app.use("/products", ProductRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`); // should add back tick ` `
});
