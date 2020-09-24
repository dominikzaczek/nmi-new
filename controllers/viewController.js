const Workshop = require("../models/workshopModel");
const User = require("../models/userModel");
const catchAsync = require("../utils/catchAsync");

exports.getDashboard = catchAsync(async (req, res, next) => {
  const workshops = await Workshop.find();
  console.log(workshops);
  res.status(200).render("studentDashboard", {
    title: "Welcome to your Dashboard",
    workshops,
  });
});

exports.getSingleWorkshop = catchAsync(async (req, res, next) => {
  const workshop = await Workshop.findOne({ slug: req.params.slug });
  const workshops = await Workshop.find();
  res.status(200).render("dashboard/singleWorkshop", {
    workshop,
    workshops,
  });
});

exports.getLoginScreen = (req, res) => {
  res.status(200).render("login");
};
