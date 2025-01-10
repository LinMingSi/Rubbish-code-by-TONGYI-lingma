const mongoose = require('mongoose');

const excuseSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Excuse = mongoose.model('Excuse', excuseSchema);

module.exports = Excuse;