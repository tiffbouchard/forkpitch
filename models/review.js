var mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    name: String,
    url: String,
    artist: String,
    album: String,
    label: String,
    year: String,
    score: Number,
    cover: String,
    author: String,
    date: String,
    editorial: Object,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Review", reviewSchema);
