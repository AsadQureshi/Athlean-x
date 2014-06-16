var workout = require('../models/Workout.js');
exports.viewWorkout = function(req, res) {
    res.render('workout.html');
}
exports.nestedSchema = function(req, res) {
    var wk = new workout();

    wk.exercises.push({
        exercise: req.body.Exercise,
        reps: req.body.reps,
    });

    wk.save(function(err, doc) {
        if (err)
            console.log(err)
        else
            console.log(doc);
            res.send(doc);
    });


};
