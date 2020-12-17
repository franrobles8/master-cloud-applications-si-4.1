const express = require("express");
const {
  getUsers,
  getUser,
  updateEmail,
  createUser,
  getComments,
  deleteUser,
} = require("../controller/userController");

const router = express.Router();

router.get("/", getUsers);
router.get("/:id", getUser);
router.get("/:id/comments", getComments);
router.post("/", createUser);
router.patch("/:id", updateEmail);
router.delete("/:id", deleteUser);

module.exports = router;
