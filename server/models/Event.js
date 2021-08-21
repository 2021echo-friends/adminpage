const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
    /*name: {
        type:String,
        maxlength:50
    },*/
})

const Event = mongoose.model('Event', eventSchema);

module.exports = { Event }