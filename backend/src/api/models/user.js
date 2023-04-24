const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    seats: {
      type: Number,
    },
    seatNumbers: {
      type: Array,
    }
    
  },
  { timestamps: true }
);

// add plugin that converts mongoose to JSON
userSchema.plugin(toJSON);


/**
 * @typedef User
 */
const User = mongoose.model('User', userSchema);

module.exports= User;
