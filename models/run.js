const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
// const Schema = mongoose.Schema;

// const musicSchema = require('./music');

const runSchema = new mongoose.Schema({
    title: String,
    distance: Number,
    duration: Number,
    location: String,
    user: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User'
    },
    playlist: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Music'
    }],


}, {
    timestamps: true
});

module.exports = mongoose.model('Run', runSchema);