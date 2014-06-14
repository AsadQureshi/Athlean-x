var mongoose = require('../connection/connection.js');
var loginSchema = new mongoose.Schema({
    Username: String,
    password: String,
});
var login = mongoose.model('Login', loginSchema);
module.exports = login;
