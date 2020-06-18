var mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    name: String,
    content: String,
    rating: Number,
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    pitchforkReview: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "PitchforkReview",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("UserReview", reviewSchema);
