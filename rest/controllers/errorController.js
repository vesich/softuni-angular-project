const router = require('express').Router();

router.use('/', (req, res) => {
    res.status(404).json({ message: 'page not found' })
});

module.exports = router;