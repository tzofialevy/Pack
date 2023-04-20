const mongoose = require('mongoose');


let tripSchema = mongoose.Schema({
    name: { type: 'string',require:true },
    StartDate: { type: 'string' },
    endDate: { type: 'string' },
    status: { type: 'planing'|'creating'|'packing' },
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }]
})
module.exports = mongoose.model('Trip', tripSchema)


