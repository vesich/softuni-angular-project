const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// CREATE ACCESS TOKEN

function createToken(user) {
    const token = jwt.sign({
        _id: user._id,
        email: user.email
    }, process.env.TOKEN_SECRET);

    return token;
}

//REGISTER USER

async function register(email, password, nickname) {

    const existing = await User.findOne({ email });

    if (existing) {
        const err = new Error('User with this email already exists in the database');
        err.status = 409;
        throw err
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ email, hashedPassword, nickname });

    await user.save();

    return {
        _id: user._id,
        email: user.email,
        nickname: user.nickname,
        accessToken: createToken(user)
    }
}

// LOGIN USER

async function login(email, password) {

    const existing = await User.findOne({ email });

    if (!existing) {
        const err = new Error('Incorrect email or password');
        err.status = 401;
        throw err;
    }

    const match = await bcrypt.compare(password, existing.hashedPassword);

    if (!match) {
        const err = new Error('Incorrect email or password');
        err.status = 401;
        throw err;
    }

    return {
        _id: existing._id,
        email: existing.email,
        accessToken: createToken(existing)
    }

}

module.exports = {
    register,
    login
}