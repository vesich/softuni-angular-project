const router = require('express').Router();

router.get('/', async (req, res) => {
    res.json({message: 'you just clicked at the home page' })
})


module.exports = router;