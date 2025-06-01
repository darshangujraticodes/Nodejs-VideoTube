import dotenv from "dotenv";
import dbConnect from "./db/dbConnect.js";
import express from "express";

dotenv.config({
  path: "./env",
});

const app = express();

const PORT = process.env.PORT || 8000;

dbConnect()
  .then(() => {
    app.on("error", (err) => {
      console.log("Express Installation or instance Error = ", err);
      throw err;
    });

    app.listen(PORT, () => {
      console.log("Server is Running on PORT = ", PORT);
    });
  })
  .catch((err) => {
    console.log(" index.js | dbConnect promise connection failed ", err);
  });
