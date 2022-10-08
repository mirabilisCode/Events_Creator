import express from "express";
import dotenv from "dotenv/config";
import mongoose from "mongoose";
import cors from "cors";

const PORT = process.env.PORT || 8080;

const app = express();

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
