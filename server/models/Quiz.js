const mongoose = require('mongoose');

const quizSchema = mongoose.Schema({
    /*name: {
        type:String,
        maxlength:50
    },*/
})

const Quiz = mongoose.model('Quiz', quizSchema);

module.exports = { Quiz }