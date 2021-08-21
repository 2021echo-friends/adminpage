const mongoose = require('mongoose');

const customerSchema = mongoose.Schema({
    /*name: {
        type:String,
        maxlength:50
    },*/
})

const Customer = mongoose.model('Customer', customerSchema);

module.exports = { Customer }