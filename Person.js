const mongoose = require('mongoose');

const PersonSchema = new mongoose.Schema({
    name: String,
    projects: [{
        title: String,
        tags: [
            {
                type: mongoose.Schema.ObjectId,
                ref: 'tag' 
            }
        ]
    }]
});


  module.exports = mongoose.model("User", PersonSchema);
