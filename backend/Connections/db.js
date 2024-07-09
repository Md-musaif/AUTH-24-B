const mongoose = require("mongoose"); // is a library to manage database connection and database operations

const mongo_url = process.env.MONGO_CONN;

mongoose
  .connect(mongo_url) //which will take mongo url
  .then(() => {
    //then it will return a promise
    console.log("MongoDB Connected...");
  })
  .catch((err) => {
    //if it has any error call try catch block
    console.log("MongoDB COnnection Error", err);
  });
