const express = require("express");
const lessonController = require("../controllers/lessonController");

const router = express.Router();

router
  .route("/")
  .get(lessonController.getAllLessons)
  .post(lessonController.addLesson);
router
  .route("/:id")
  .get(lessonController.getSingleLesson)
  .patch(lessonController.updateLesson)
  .delete(lessonController.deleteLesson);

module.exports = router;
