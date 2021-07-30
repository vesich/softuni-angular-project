const { model, Schema } = require('mongoose');

const schema = new Schema({
    email: { type: String, required: true },
    hashedPassword: { type: String, required: true },
    nickname: { type: String, required: true }
});

module.exports = model('User', schema);