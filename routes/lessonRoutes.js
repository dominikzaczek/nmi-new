const express = require("express");
const lessonController = require("../controllers/lessonController");
const authController = require("../controllers/authController");

const router = express.Router();

router
  .route("/")
  .get(authController.protect, lessonController.getAllLessons)
  .post(lessonController.addLesson);
router
  .route("/:id")
  .get(lessonController.getSingleLesson)
  .patch(lessonController.updateLesson)
  .delete(lessonController.deleteLesson);

module.exports = router;
