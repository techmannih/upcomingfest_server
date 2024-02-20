const express = require("express");
const router = express.Router();
const { upload } = require("../config/multer.middleware");

const {
  AllEvents,
  newEventController,
} = require("../controller/EventController");

router.get("/allEvents", AllEvents);

router.post("/addEvent", upload.single("image"), newEventController);

module.exports = router;
