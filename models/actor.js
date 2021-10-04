let mongoose = require('mongoose');

let actorSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    bYear: {
        type: Date,
        required: true
    },
    movies: [{
        type: mongoose.Schema.ObjectId,
        ref: 'Movie',
        unique: true
    }]
}, {strict: true});
module.exports = mongoose.model('Actor', actorSchema);