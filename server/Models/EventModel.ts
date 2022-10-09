import mongoose from "mongoose";

const Schema = mongoose.Schema;

const eventsSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  eventDate: { type: String, required: true },
});

const Event = mongoose.model("Event", eventsSchema);

export default Event;
