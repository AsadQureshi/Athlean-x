var userSchema = require('../models/User');
exports.viewUser = function(req, res) {
    res.render('user.html');
}
exports.addUser = function(req, res) {
    
    if(req.body)
    {
    var data= new userSchema({
         Username: req.body.Username ,
         password: req.body.password,
         Age: req.body.age,
         Joining_date: req.body.Joining_date,
         isadmin: req.body.isadmin,
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