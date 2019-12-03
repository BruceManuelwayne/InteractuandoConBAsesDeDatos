var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var EventsSchema = new Schema({
    id: { type: Number, required: true },
    user_id: { type: Number, required: true },
    title: { type: String, required: true },
    start: { type: String, required: true },
    end: { type: String, required: false },
    allDay: { type: Boolean, required: false }
})

var Events = mongoose.model('Events', EventsSchema);

module.exports = Events;
