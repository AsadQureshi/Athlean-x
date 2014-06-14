var loginSchema = require('../models/Login');
exports.viewLogin = function(req, res) {
    res.render('login.html');
}
exports.addlogin = function(req, res) {
    
    if(req.body)
    {
    var data= new loginSchema({
         Username: req.body.Username ,
         password: req.body.password,
     });
     data.save(function(err, data) {
          if (err){
         res.send(err);
        }
         else
         	{
         		console.log(data);
         		res.send(data);
        		
 			}
     });
    }

    else
    {
        console.log('body is empty');
    }
}