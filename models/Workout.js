var mongoose = require('../connection/connection.js');
module.exports = function(mongoose) {
var models={
var workoutSchema = new mongoose.Schema({

date:Date,
//_id:Number,
exercises:[{type: Schema.Types.ObjectId, ref :'Exercise'}]
});
var exerciseSchema = new Schema({
  _Name : { type: Number, ref: 'Workout' },
});
};
models.WorkoutModel = connection.model('Workout', workoutSchema);
    models.exercisesModel = connection.model('exercises', exercisesSchema);
 return models;

}