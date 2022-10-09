import express, { Request, Response } from "express";
import mongoose from "mongoose";
import Event from "../Models/EventModel";
const Schema = mongoose.Schema;
const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  const result = await Event.find({}, { _id: 0, __v: 0 });
  res.send(result);
});

export default router;
