var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var userSchema = new Schema({
    id: { type: Number, required: true },
    user: { type: String, required: true },
    pass: { type: String, required: true }
})


var User = mongoose.model('User', userSchema);

module.exports = User;
