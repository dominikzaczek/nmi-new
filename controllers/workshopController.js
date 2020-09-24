const Workshop = require("./../models/workshopModel");
const catchAsync = require("./../utils/catchAsync");

exports.getAllWorkshops = catchAsync(async (req, res) => {
  const workshops = await Workshop.find();
  console.log(workshops);
  res.status(200).json({
    status: "success",
    data: {
      workshops,
    },
  });
});

exports.createWorkshop = async (req, res) => {
  try {
    const newWorkshop = await Workshop.create(req.body);
    res.status(200).json({
      status: "success",
      data: {
        newWorkshop,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getSingleWorkshop = async (req, res) => {
  try {
    console.log(req.params.id);
    const workshop = await Workshop.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        workshop,
      },
    });
    console.log(req.params);
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.updateWorkshop = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Workshop updated",
  });
  console.log(req.params);
};

exports.deleteWorkshop = (req, res) => {
  res.status(200).json({
    status: null,
  });
};
