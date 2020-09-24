const express = require("express");
const app = require("./app");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

//CONFIG

dotenv.config({ path: "./config.env" });

//DB Connection

const DB = process.env.DATABASE_URL.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then((con) => {
    console.log("DB successfully connected");
  });

//APP PORT
app.listen(3000);
