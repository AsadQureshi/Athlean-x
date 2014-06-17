var login = require('../models/User');

exports.viewLogin = function(req, res) {
    res.render('login.html');
}
exports.getLogin = function(req, res) {
    


    login.find({
            Username: req.body. Username,
            password: req.body.password
        });
			
        if(login.password===req.body.password)
        {
        	console.log(login)
            res.render('menu.html');
        }
		else
		{
			console.log('message:"try again password mismatch"')
			res.send("try again")
		}
    
	}	
