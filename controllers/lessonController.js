const catchAsync = require("../utils/catchAsync");
const Lesson = require("../models/lessonModel");

exports.getAllLessons = catchAsync(async (req, res) => {
  const lessons = await Lesson.find({
    student: res.locals.user.id,
  });
  res.status(200).json({
    status: "success",
    data: {
      lessons,
    },
  });
});

exports.addLesson = async (req, res) => {
  try {
    const newLesson = await Lesson.create(req.body);
    res.status(200).json({
      status: "success",
      data: {
        newLesson,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getSingleLesson = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Gets single Lesson",
  });
  console.log(req.params);
};

exports.updateLesson = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Lesson updated",
  });
  console.log(req.params);
};

exports.deleteLesson = (req, res) => {
  res.status(200).json({
    status: null,
  });
};
