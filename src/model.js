const mongoose = require('mongoose');

const mainSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    label: { type: String, required: true },
  },
  { timestamps: true },
);

const Field = mongoose.model('mainTable', mainSchema);

// Exporting as a named export
module.exports = { Field };