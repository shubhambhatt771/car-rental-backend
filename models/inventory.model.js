const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const inventorySchema = new Schema(
    {
        _id: mongoose.Types.ObjectId,
        model: { type: mongoose.Types.ObjectId, ref: 'cars' },
        qty: { type: Number, required: true },
        in_stock: { type: Number, required: true }
    }
);

module.exports = mongoose.model('inventory', inventorySchema);