const mongoose = require('mongoose');

const electronicSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    type: {
        type: String,
        required: true
    },
    damages: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    production: {
        type: Number,
        required: true
    },
    exploitation: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    buyingList: [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }]
})

const Electronic = mongoose.model('Electronic', electronicSchema);

module.exports = Electronic;