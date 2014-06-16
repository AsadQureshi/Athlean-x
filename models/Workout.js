var mongoose = require('../connection/connection.js');
// var exerciseSchema = require('../models/Exercise.js');

var exerciseSchema = new mongoose.Schema({
    exercise: String,
    reps: Number
});

var workoutSchema = new mongoose.Schema({
    created: {
        type: Date,
        default: Date.now()
    },
    exercises: [exerciseSchema]
});

var workout = mongoose.model('Workout', workoutSchema);


module.exports = workout;
