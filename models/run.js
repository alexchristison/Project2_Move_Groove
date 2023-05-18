const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  content: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    default: 5
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  userName: String,
  userAvatar: String,
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
}, {
  timestamps: true
});

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
  comments: [commentSchema] // Moved commentSchema here
}, {
  timestamps: true
});

module.exports = mongoose.model('Run', runSchema);
