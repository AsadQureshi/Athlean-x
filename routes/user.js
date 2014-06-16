var workout = require('../models/Exercise');
exports.viewUser = function(req, res) {
    res.render('user.html');
}
// exports.addUser = function(req, res) {
//     if (req.body) {
//         var data = new userSchema({
//             Username: req.body.Username,
//             password: req.body.password,
//             Age: req.body.age,
//             Joining_date: req.body.Joining_date,
//             isadmin: req.body.isadmin,
//         });
//         data.save(function(err, data) {
//             if (err) {
//                 res.send(err);
//             } else {
//                 console.log(data);
//                 res.send(data);

//             }
//         });
//     } else {
//         console.log('body is empty');
//     }
// }



exports.addUser = function(req, res) {
    var wk = new workout();

    wk.exercises.push({
        Username: 'asad' ,
            password: 1234,
            Age: 23,
            Joining_date: 23-9-2014,
            isadmin: false,
        exercise: chinups,
        reps: 12,
    });

    wk.save(function(err, doc) {
        if (err)
            console.log(err)
        else
            console.log(doc);
            res.send(doc);
    });


};
