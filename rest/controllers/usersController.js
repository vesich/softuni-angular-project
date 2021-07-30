const router = require('express').Router();

router.get('', (req, res) => {
    res.json({message: 'hello from users/get'})
})

module.exports = router;