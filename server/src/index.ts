import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/auth";

dotenv.config();
const app = express();

mongoose
  .connect(process.env.MONGO_URL as string)
  .then(() => console.log("DB Connected!"))
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
app.use(cors());
app.use("/auth", authRoutes);

app.listen(8081, () => {
  console.log(`Now listening to port 8081`);
});
