var mongoose = require('../connection/connection.js'),
    bcrypt = require('bcrypt-nodejs');

var exerciseSchema = new mongoose.Schema({
    exercise: String,
    reps: Number,
    created: {
        type: Date,
        default: Date.now()
    }
});

var userSchema = new mongoose.Schema({
    username: String,
    password: String,
    age: Number,
    joining_date: String,
    isadmin: Boolean,
    exercises: [exerciseSchema],
    created_at: {
        type: Date
    },
    updated_at: {
        type: Date
    }
});


userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validatePassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

userSchema.pre('save', function(next) {
    this.updated_at = new Date();
    if (!this.created_at) {
        this.created_at = new Date();
    }
    next();
});

var user = mongoose.model('User', userSchema);

module.exports = user;
