const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const carSchema = new Schema(
    {
        _id: mongoose.Types.ObjectId,
        inventory: { type: mongoose.Types.ObjectId, ref: 'inventory' },
        model: { type: String, required: true },
        body_type: String,
        galleries: [String]
    }
);

module.exports = mongoose.model('cars', carSchema);