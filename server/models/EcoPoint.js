const mongoose = require('mongoose');

const ecoPointSchema = mongoose.Schema({
    /*name: {
        type:String,
        maxlength:50
    },*/
})

const EcoPoint = mongoose.model('EcoPoint', ecoPointSchema);

module.exports = { EcoPoint }