const mongoose = require("mongoose");
const validate = require("validator");
const slugify = require("slugify");

const workshopSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "No title? How come?"],
  },
  teacher: {
    type: mongoose.Schema.ObjectId,
    required: [true, "A lesson has to have a teacher"],
  },
  addedAt: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  type: {
    type: String,
    enum: ["piano", "singing", "theory"],
  },
  embedUrl: {
    type: String,
    required: [true, "Add the embed code"],
  },
  image: {
    type: String,
    required: [true, "Add a cover please"],
  },
  description: {
    type: String,
    required: [true, "Please, add a description of at least 150 characters"],
    minlength: 50,
  },
  slug: {
    type: String,
  },
});

workshopSchema.pre("save", function (next) {
  this.slug = slugify(this.title, { lower: true });
  console.log(this.slug);
  next();
});
const Workshop = mongoose.model("Workshop", workshopSchema);

module.exports = Workshop;
