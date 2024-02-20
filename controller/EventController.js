const eventModel = require("../models/eventmodel"); // Updated import
const path = require("path");
const fs = require("fs");
const express = require("express");
const multer = require("multer");
const { uploadOnCloudinary } = require("../config/cloudinary.service");

// Create event
const uploadMiddleware = multer({ dest: "uploads/" });

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
    } = req.body;

    // Check if req.file is defined before accessing its path property
    if (!req.file || !req.file.path) {
      return res
        .status(400)
        .json({ message: "No file uploaded or file path is missing." });
    }

    const uploadResult = await uploadOnCloudinary(req.file.path);

    // Assuming there is a typo in your code, and it should be "primaryLocation" instead of "location"
    const newEvent = new eventModel({
      eventName,
      description,
      website,
      instaHandle,
      date,
      location, // This line might need to be updated to primaryLocation if that's the correct property
      image: uploadResult.url,
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
  }  catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error in newEventController", error: err.message });
  }
};
// Get details of all events
exports.AllEvents = async (req, res) => {
  // res.send("Hello from the server!");
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
