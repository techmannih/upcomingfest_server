const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema(
  {
    eventName: {
      type: String,
    },
    description: {
      type: String,
    },
    website: {
      type: String,
    },
    instaHandle: {
      type: String,
    },
    location: {
      type: String,
    },
    imageUrl: {
      type: String,
      // required: true,
    },
    primaryLocation: {
      type: String,
    },
    date: {
      type: String,
    },
    primaryDate: {
      type: String,
    },
    lastDate: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const EventModel = mongoose.model("Event", EventSchema);
module.exports = EventModel;
