exports.viewWorkout = function(req, res) {
    res.render('workout.html');
}
exports.addworkout = function(req, res) {
    
    if(req.body)
    {
    var data= new workoutSchema({
         date: req.body.date ,
         workouts: req.body.Exercise,
         Raps: req.body.Raps,
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