const mongoose = require('mongoose');

const postScheme = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, '"name" is required.'],
    },
    content: {
      type: String,
      required: [true, '"content" is required.'],
    },
    image: {
      type: String,
      default: '',
    },
    tags: [
      {
        type: String,
        required: [true, '"tag" is required.'],
      },
    ],
    type: {
      type: String,
      required: [true, '"type" is required.'],
      enum: ['group', 'person'],
    },
    likes: {
      type: Number,
      default: 0,
    },
    comments: {
      type: Number,
      default: 0,
    },
    createAt: {
      type: Date,
      default: Date.now,
    },
  },
  { versionKey: false }
);

const Post = mongoose.model('Post', postScheme);
module.exports = Post;
