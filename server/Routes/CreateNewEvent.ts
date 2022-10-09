import express, { Request, Response } from "express";
import { check, validationResult } from "express-validator";
import mongoose from "mongoose";
import Event from "../Models/EventModel";
const Schema = mongoose.Schema;
const router = express.Router();

router.post(
  "/",
  [
    check("firstName", "First Name is required").not().isEmpty(),
    check("lastName", "Last Name is required").not().isEmpty(),
    check("email", "Email need to have correct format").isEmail(),
    check("eventDate", "Event Date is required").not().isEmpty(),
  ],
  (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    const event = new Event({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      eventDate: req.body.eventDate,
    });

    event.save().then((response) => {
      res.send(response._id);
    });
  }
);

export default router;
