const { model, Schema } = require('mongoose');

const schema = new Schema({
    email: { type: String, required: true },
    hashedPassword: { type: String, required: true },
    username: { type: String, minLength: [5, 'Username should be at least 5 characters long'],
validate: {
    validator: function(v) {
        return /[a-zA-Z0-9]+/g.test(v);
    },
    message: props => `${props.value} must contains only latin letters and digits`
} },
    age: {type : Number, required: [true, 'Age is required']},
    carsHistory: [{ type: Schema.Types.ObjectId, ref: 'Car', default: [] }],
    likedCars: [{ type: Schema.Types.ObjectId, ref: 'Car', default: [] }]
});

module.exports = model('User', schema);