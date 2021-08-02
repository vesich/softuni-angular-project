const router = require('express').Router();
const { body, validationResult } = require('express-validator')

const { isGuest } = require('../middlewares/guards');
const { login, register } = require('../services/user');

//POST REQUESTS TO REGISTER

router.post('/register',
    isGuest(),
    body('email').trim().normalizeEmail().isEmail().withMessage('You must enter a valid email'),
    body('password').trim().isLength({ min: 6 }).withMessage('Password must be at least 8 characters long'),
    body('age').trim(),
    body('username').trim().isLength({ min: 4 }).withMessage('Nickname must be at least 4 characters long'),
    body('rePassword').custom((value, { req }) => {
        if (value != req.body.password) {
            throw new Error('Passwords don\'t match')
        }
        return true;
    }), async (req, res) => {
        const { errors } = validationResult(req);
        try {
            if (errors.length > 0) {
                throw new Error(Object.values(errors).map(e => e.msg).join('\n'))
            }
            const userData = await register(req.body.email, req.body.password, req.body.username, req.body.age)
            res.json(userData);
        } catch (error) {
            res.status(error.status || 400).json({ message: error.message })
        }

    })

//POST REQUESTS TO LOGIN

router.post('/login', isGuest(), async (req, res) => {
    const { email, password } = req.body;

    try {
        const userData = await login(email, password);
        res.json(userData);
    } catch (error) {
        res.status(error.status || 400).json({ message: error.message })
    }
})

//GET LOGOUT

router.get('/logout', (req, res) => {
    res.status(204).end();
});


module.exports = router;