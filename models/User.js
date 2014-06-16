var mongoose = require('../connection/connection.js');
var exerciseSchema = new mongoose.Schema({
    exercise: String,
    reps: Number,
    created: {
        type: Date,
        default: Date.now()
    }
    
});

var userSchema = new mongoose.Schema({
    Username: String,
    password: String,
    Age: Number,
    Joining_date: String,
    isadmin: Boolean,
    exercises: [exerciseSchema]
});
var user = mongoose.model('User', userSchema);
module.exports = user;


