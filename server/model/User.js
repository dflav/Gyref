const mongoose = require('mongoose');

const routineSchema = new mongoose.Schema({
  name: { type: String },
  frequency: { type: Number },
  type: { type: String },
  description: { type: String },
  days: [
    [
      {
        name: String,
        entries: [{ kg: { type: Number }, reps: { type: Number } }]
      }
    ]
  ]
});

const logSchema = new mongoose.Schema({
  exercise: { type: String },
  description: { type: String },
  duration: { type: Number },
  date: { type: Date },
  sets: { type: Number },
  entries: [
    {
      kg: { type: Number },
      reps: { type: Number }
    }
  ]
});

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 4,
    max: 20
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    max: 1024,
    min: 6
  },
  date: {
    type: Date,
    default: Date.now
  },
  logs: [logSchema],
  workouts: [routineSchema]
});

module.exports = mongoose.model('User', userSchema);
