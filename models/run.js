const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = new mongoose.Schema;

const runSchema = new mongoose.Schema({
    title: String,
    distance: Number,
    duration: {
        hours: Number,
        minutes: Number,
        seconds: Number
    },
    location: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Run', runSchema)