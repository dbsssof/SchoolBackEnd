const mongoose = require("mongoose");

const TemplateSchema = new mongoose.Schema({
  temp: { type: String },
  tempimage:{ type: String },
  schoolid: { type: String },
  status: { type: Boolean, default: false },
});

const teacher = mongoose.model("template", TemplateSchema);

module.exports = teacher;
