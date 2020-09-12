const mongoose = require('mongoose');
const wordsSchema = new mongoose.Schema({
    word: {
        type: String,
        required: true,
        minlength: 1,
    },
    means: {
        type: String,
        required: true,
        minlength: 1,
    },
    cat: {
        type: String,
        required: true,
        minlength: 1,
    },
});

const Words = mongoose.model('Words', wordsSchema);

module.exports = Words;
