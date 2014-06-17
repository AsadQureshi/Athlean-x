var _user = require('../models/User');

exports.viewLogin = function(req, res) {
    res.render('login.html');
} // var user = new user();
// user.username = 'sultansaadat';
// // user.email = 'sultansaadat@gmail.com';
// user.password = user.generateHash('test123');
// // user.sessionToken = null;



// exports.getLogin = function(req, res) {
// login.find({
//     Username: req.body.Username,
//     password: req.body.password
// });

// login.find({

// }, function(err, doc) {

// })

// if (login.password === req.body.password) {
//     console.log(login)
//     res.render('menu.html');
// } else {
//     console.log('message:"try again password mismatch"')
//     res.send("try again")
// }


//create a new user with the new schema




exports.getlogin = function(req, res) {
    _user.findOne({
            username: req.body.username
        },
        function(err, _user) {
            if (err) {
                res.json(err);
            };
            if (!_user) {
                console.log('message:"User Not Found"');
            };
            if (_user.validatePassword(req.body.password)) {
                //if (!_user.sessionToken) {
                //_user.sessionToken = generateToken();
                _user.save(function(err) {
                    if (err) {
                        res.json(err);
                    } else {
                        res.send(200, {
                            //sessionkey: _user.sessionToken,
                            status: 'success',
                            message: 'logged in successfully',
                            code: 200
                        });
                    }
                });	
            } else {
                res.send(200, {
                    //sessionkey: _user.sessionToken,
                    status: 'success',
                    message: 'already logged in',
                    code: 200
                });
            }
        //  else {
        //     res.send(200, {
        //         status: 'failure',
        //         message: 'invalid password',
        //         code: 200
        //     });
        // }

    });
}
