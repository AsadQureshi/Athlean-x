var mongoose = require('../connection/connection.js');
var userSchema = new mongoose.Schema({
    Userame: String,
    password: String,
    age: Number,
    Joining_date:Date,
    isadmin:Boolean,
});
var user = mongoose.model('User', userSchema);
module.exports = user;
