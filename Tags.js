const mongoose = require('mongoose');

const TagSchema = new mongoose.Schema({
    en: String,
    sv: String
});


  module.exports = mongoose.model("Tag", TagSchema);
