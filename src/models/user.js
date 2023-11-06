const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    minLength: 2,
  },
  lastname: {
    type: String,
    require: true,
    minLength: 2,
  },
  username: {
    type: String,
    require: true,
    minLength: 5,
  },
  books: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "book" }],
    default: [],
  },
});

module.exports = mongoose.model("user", userSchema);
