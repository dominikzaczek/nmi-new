const express = require("express");
const workshopController = require("../controllers/workshopController");
const authController = require("./../controllers/authController");

const router = express.Router();

router
  .route("/")
  .get(authController.protect, workshopController.getAllWorkshops)
  .post(workshopController.createWorkshop);
router
  .route("/:id")
  .get(workshopController.getSingleWorkshop)
  .patch(workshopController.updateWorkshop)
  .delete(workshopController.deleteWorkshop);

module.exports = router;
