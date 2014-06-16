var mongoose = require('../connection/connection.js');
var exerciseSchema = require('Exercise.js');

var workoutSchema = new mongoose.Schema({
    date: Date,
    exercises: [exerciseSchema]
});

var workout = mongoose.model('Workout', workoutSchema);
module.exports = workout;
