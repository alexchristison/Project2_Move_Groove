const mongoose = require('mongoose')

const musicSchema = new mongoose.Schema({
    song: String,
    artist: String,
    genre: String
}, {
    timestamps: true
})

module.exports = musicSchema