const { model, Schema } = require('mongoose');

const schema = new Schema({
    make: { type: String, minLength: [3, 'Car Make must be at least 3 characters long'] },
    model: { type: String, minLength: [3, 'Car Model must be at least 3 characters long'] },
    year: { type: Number, min: [1940, 'Year must be between 1940 and 2022'], max: [2022, 'Year must be between 1940 and 2022'] },
    carImage: { type: String, required: [true, 'Image is required'], match: [/^https?/, 'Image must be a valid URL'] },
    description: { type: String, minLength: [20, 'Car description must be at least 20 characters long'] },
    owner: { type: Schema.Types.ObjectId, ref: 'User' },
    likedBy: [{ type: Schema.Types.Object, ref: 'User', default: [] }]

});

module.exports = model('Car', schema)