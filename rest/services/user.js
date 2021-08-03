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

// PARSE COOKIE

function parseToken(req, res) {
    const token = req.cookies[process.env.COOKIE_NAME];
    if (token) {
        try {
            const userData = jwt.verify(token, process.env.TOKEN_SECRET);
            req.user = userData;
            res.locals.user = userData;
        } catch (error) {
            res.clearCookie(process.env.COOKIE_NAME);
            console.log(error);
            res.status(401).json({ message: 'Please sign in' });

            return false;
        }
    }
    return true;
}

module.exports = () => (req, res, next) => {
    if (parseToken(req, res)) {
        req.service = {
            async register(email, password, username, age) {
                const token = await register(email, password, username, age);

                res.cookie(process.env.COOKIE_NAME, token, { httpOnly: true });
                return token;
            },
            async login(email, password) {
                const token = await login(email, password);
                res.cookie(process.env.COOKIE_NAME, token);

                return token;
            },
            logout() {
                res.clearCookie(process.env.COOKIE_NAME)
            }
        }
        next();
    }
}

//REGISTER USER

async function register(email, password, username, age) {

    const existing = await User.findOne({ email });

    if (existing) {
        const err = new Error('User with this email already exists in the database');
        err.status = 409;
        throw err
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ email, hashedPassword, username, age });

    await user.save();

    return {
        _id: user._id,
        email: user.email,
        age: user.age,
        username: user.username,
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

