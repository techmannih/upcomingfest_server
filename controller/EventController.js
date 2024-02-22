const eventModel = require("../models/eventmodel"); // Updated import

// Create a new event
exports.newEventController = async (req, res) => {
  try {
    const {
      eventName,
      description,
      website,
      instaHandle,
      location,
      date,
      primaryDate,
      lastDate,
      primaryLocation,
      imageUrl,
    } = req.body;

    // Assuming there is a typo in your code, and it should be "primaryLocation" instead of "location"
    const newEvent = new eventModel({
      eventName,
      description,
      website,
      instaHandle,
      date,
      location, // This line might need to be updated to primaryLocation if that's the correct property
      imageUrl,
      primaryDate,
      primaryLocation,
      lastDate,
    });

    const savedEvent = await newEvent.save();

    return res.status(201).json({
      success: true,
      message: "New event created",
      event: savedEvent,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error in newEventController", error: err.message });
  }
};

// Get details of all events
exports.AllEvents = async (req, res) => {
  try {
    const events = await eventModel.find();
    if (events.length > 0) {
      return res.status(200).send({
        success: true,
        events: events,
      });
    } else {
      return res.status(404).send({
        success: false,
        message: "No events found",
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error in AllEvents", error: err.message });
  }
};
