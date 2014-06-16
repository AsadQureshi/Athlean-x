var mongoose = require('../connection/connection.js');

/* exercise schema */
var exerciseSchema = new mongoose.Schema({
    exercise: String,
    reps: Number
});

/* workout nested schemas */
var workoutSchema = new mongoose.Schema({
    created: {
        type: Date,
        default: Date.now()
    },
    exercises: [exerciseSchema]
});

var workout = mongoose.model('Workout', workoutSchema);

module.exports = workout;
