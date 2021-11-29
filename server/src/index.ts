import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL as string)
  .then(() => {
    console.log("DB Connected");
    const app = express();
    app.use(express.json());
    app.use(cors());

    app.listen(8080, () => {
      console.log(`Now listening to port 8080`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
