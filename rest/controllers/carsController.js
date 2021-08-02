const router = require('Express').Router();

router.get('/', async (req, res) => {
    res.json({message: 'you just clicked at the catalogue page' })
})

module.exports = router;