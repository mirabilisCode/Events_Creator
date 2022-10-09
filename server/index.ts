import express from "express";
import * as dotenv from "dotenv";
import mongoose from "mongoose";
import eventsRouter from "./Routes/GetAllEvents";
import createEventRouter from "./Routes/CreateNewEvent";
import cors from "cors";

dotenv.config();

const PORT = process.env.PORT || 8080;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/getAllEvents", eventsRouter);
app.use("/createEvent", createEventRouter);

app.listen(PORT, async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URL}`);
    console.log("Database Connected");
  } catch (e) {
    console.log("Error when connecting to the database: ", e);
  }
  console.log(`Server listening on ${PORT}`);
});
