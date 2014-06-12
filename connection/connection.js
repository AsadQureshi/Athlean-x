var mongoose = require("mongoose");
var uristring = 'mongodb://localhost/athlean-x';
var theport = process.env.PORT || 3000;
mongoose.connect(uristring, function(err, res) {
    if (err) {
        console.log('ERROR connecting to: ' + uristring + '. ' + err);
    } else {
        console.log('Succeeded connected to: ' + uristring);
    }
});
module.exports = mongoose;
