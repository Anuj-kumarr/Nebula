const express = require("express");
const {
  registerUser,
  authUser,
  updation
} = require("../controller/userController");
const { protect } = require("../Middleware/authMiddleware");

const router = express.Router();

// router.route("/").get(protect, allUsers);
router.route("/").post(registerUser);
router.post("/login", authUser);
router.put("/update",updation);

module.exports = router;