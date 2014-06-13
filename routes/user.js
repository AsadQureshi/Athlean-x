var userSchema = require('../models/User'); 
exports.addUser = function(req, res) {
    var data= new userSchema({
        username: 'Asad Ali Qureshi' ,
        password: 1234,
        age:28,
        Joining_date: 3-03-2014,
        isadmin: False,
    });
    data.save(function(err, data) {
         if (err){
        res.send(err);
        }
        else
        	{
        		return console.error(err);
        		console.log(data);
        		res.send(data);
        		
			}
    });
}
