const Workshop = require("../models/workshopModel");
const Lesson = require("../models/lessonModel");
const User = require("../models/userModel");
const catchAsync = require("../utils/catchAsync");
const marked = require("marked");

exports.getDashboard = catchAsync(async (req, res, next) => {
  const workshops = await Workshop.find();
  const lessons = await Lesson.find({
    student: res.locals.user.id,
  });
  lessons.sort(function (a, b) {
    // Turn your strings into dates, and then subtract them
    // to get a value that is either negative, positive, or zero.
    return new Date(b.date) - new Date(a.date);
  });
  res.status(200).render("studentDashboard", {
    title: "Welcome to your Dashboard",
    dashboard: true,
    workshops,
    lessons,
    marked,
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

exports.adminAddALesson = (req, res) => {
  res.status(200).render("../views/admin/addALesson");
};
