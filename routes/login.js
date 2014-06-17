var login = require('../models/User');

exports.viewLogin = function(req, res) {
    res.render('login.html');
}
exports.getLogin = function(req, res) {
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
    
    var user = new User();
    user.username = 'sultansaadat';
    user.email = 'sultansaadat@gmail.com';
    user.password = user.generateHash('test123');
    // user.sessionToken = null;


};


// verify existing user

// exports.login = function(req, res) {
//     User.findOne({
//         username: 'sultansaadat'
//     }, function(err, user) {
//         if (err) {
//             res.json(err);
//         };
//         if (!user) {
//             res.json('User Not Found');
//         };
//         if (user.validatePassword('test123')) {
//             if (!user.sessionToken) {
//                 user.sessionToken = generateToken();
//                 user.save(function(err) {
//                     if (err) {
//                         res.json(err);
//                     } else {
//                         res.send(200, {
//                             sessionkey: user.sessionToken,
//                             status: 'success',
//                             message: 'logged in successfully',
//                             code: 200
//                         });
//                     }
//                 });
//             } else {
//                 res.send(200, {
//                     sessionkey: user.sessionToken,
//                     status: 'success',
//                     message: 'already logged in',
//                     code: 200
//                 });
//             }
//         } else {
//             res.send(200, {
//                 status: 'failure',
//                 message: 'invalid password',
//                 code: 200
//             });
//         }

//     });
// };
