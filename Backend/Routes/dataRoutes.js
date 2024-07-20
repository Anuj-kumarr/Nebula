const express = require("express");
const {
  sendData,
} = require("../controller/dataController");

const router = express.Router();

// router.route("/:chatId").get(protect, allMessages);
router.route("/").post(sendData);

module.exports = router;