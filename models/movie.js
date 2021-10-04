let mongoose = require('mongoose');
let movieSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: {
        type: String,
        required: true,
        unique: true
    },
    year: {
        type: Date,
        required: true
    }
}, {strict: true});
module.exports = mongoose.model('Movie', movieSchema);