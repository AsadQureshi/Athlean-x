var mongoose = require('../connection/connection.js');
var exerciseSchema = new mongoose.Schema({
    exercise: String,
    reps: Number
});
var exercise = mongoose.model('Exercise', exerciseSchema);
module.exports = exercise;
