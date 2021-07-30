const router = require('express').Router();

router.get('/', (req, res) => {
    res.status(404).json({ message: 'page not found' })
});

module.exports = router;