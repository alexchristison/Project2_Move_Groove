const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
// const Schema = mongoose.Schema;

const runSchema = new mongoose.Schema({
    title: String,
    distance: Number,
    duration: Number,
    location: String,
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
}, {
    timestamps: true
});

module.exports = mongoose.model('Run', runSchema)