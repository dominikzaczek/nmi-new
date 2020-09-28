const mongoose = require("mongoose");
const validator = require("validator");

const lessonSchema = new mongoose.Schema(
  {
    student: {
      type: mongoose.Schema.ObjectId,
      ref: "Student",
      required: [true, "A lesson has to have a student"],
    },
    teacher: {
      type: mongoose.Schema.ObjectId,
      ref: "Tutor",
      required: [true, "A lesson has to have a teacher"],
    },
    dateOfLesson: {
      type: Date,
      required: [true, "Please, specify a date for the lesson"],
    },
    addedAt: {
      type: Date,
      required: true,
      default: Date.now(),
    },
    given: {
      type: Boolean,
    },
    type: {
      type: String,
      enum: ["piano", "singing", "theory"],
    },
    report: {
      type: String,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Lesson = mongoose.model("Lesson", lessonSchema);

module.exports = Lesson;
