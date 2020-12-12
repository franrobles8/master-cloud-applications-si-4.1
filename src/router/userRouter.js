const express = require("express");
const {
  getUser,
  updateEmail,
  createUser,
  getComments,
  deleteUser,
} = require("../controller/userController");

const router = express.Router();

router.get("/:id", getUser);
router.get("/:id/comments", getComments);
router.post("/", createUser);
router.put("/:id", updateEmail);
router.delete("/:id", deleteUser);

module.exports = router;
