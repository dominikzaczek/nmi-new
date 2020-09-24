exports.getAllLessons = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "It gets all Lessons",
  });
};

exports.addLesson = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "It adds a Lesson",
  });
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
