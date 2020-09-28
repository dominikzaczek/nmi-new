const { Router } = require("express");
const express = require("express");
const viewController = require("../controllers/viewController");
const authController = require("../controllers/authController");
const app = require("../app");
const router = express.Router();

router.use(authController.isLoggedIn);

router.get("/", (req, res, next) => {
  res.status(200).render("front-page", {
    title: "New Music Institute",
  });
});

router.get("/login", viewController.getLoginScreen);
router.get(
  "/admin/lesson/add",
  authController.protect,
  authController.restrictTo("admin"),
  viewController.adminAddALesson
);
router.get("/dashboard", authController.protect, viewController.getDashboard);
router.get(
  "/workshop/:slug",
  authController.protect,
  viewController.getSingleWorkshop
);
module.exports = router;
