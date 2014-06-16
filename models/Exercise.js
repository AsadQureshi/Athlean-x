var mongoose = require('../connection/connection.js');
var userSchema = new mongoose.Schema({
    Username: String,
    password: String,
    Age: Number,
    Joining_date: String,
    isadmin: Boolean,
});
var user = mongoose.model('User', userSchema);
module.exports = user;
