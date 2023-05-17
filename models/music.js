const mongoose = require('mongoose')

const musicSchema = new mongoose.Schema({
    song: String,
    artist: String,
    genre: String,
    user: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User'
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('Music', musicSchema);