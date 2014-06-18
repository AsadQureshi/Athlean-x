var login = require('../models/User');

exports.viewLogin = function(req, res) {
    res.render('login.html');
}
// var user = new user();
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




exports.getLogin = function(req, res) {
    login.findOne({
            username: req.body.Username
        },
        function(err, login) {
            if (err) {
                res.json(err);
            };
            if (!login) {
                console.log('message:"User Not Found"');
                res.send('Invalid username.So, please try again');
            }
            else{
            	console.log('user found,,checking password');
            };
            if (login.validatePassword(req.body.password)) {
                // if (!login.sessionToken) {
                // login.sessionToken = generateToken();
                login.save(function(err) {
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
            //}

        });
}
