const express = require("express");
const router = express.Router();

const {
  AllEvents,
  newEventController,
} = require("../controller/EventController");

router.get("/allEvents", AllEvents);

router.put("/addEvent", newEventController);

module.exports = router;
