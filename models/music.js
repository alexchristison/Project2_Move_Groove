const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  // Comment schema definition
});

const musicSchema = new Schema({
  song: String,
  artist: String,
  genre: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  comments: [commentSchema]
}, {
  timestamps: true
});

module.exports = mongoose.model('Music', musicSchema);
