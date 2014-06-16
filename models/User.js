var mongoose = require('../connection/connection.js');
var exerciseSchema = new mongoose.Schema({
    exercise: String,
    reps: Number,
    created: {
        type: Date,
        default: Date.now()
    },
    exercises: [exerciseSchema]
});

var userSchema = new mongoose.Schema({
    Username: String,
    password: String,
    Age: Number,
    Joining_date: String,
    isadmin: Boolean,
});
var user = mongoose.model('User', userSchema);
module.exports = user;


