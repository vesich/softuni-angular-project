const router = require('Express').Router();

let cars =
    [
        {
            "make": "BMW",
            "model": "335i",
            "year": 2007,
            "carImage": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/p90411287-highres-the-new-bmw-m5-cs-01-1617902730.jpg?crop=0.641xw:0.640xh;0.209xw,0.334xh&resize=980:*",
            "description": "this is a fast sedan 5th series"
        }, {
            "make": "Mercedes",
            "model": "335i",
            "year": 2007,
            "carImage": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/p90411287-highres-the-new-bmw-m5-cs-01-1617902730.jpg?crop=0.641xw:0.640xh;0.209xw,0.334xh&resize=980:*",
            "description": "this is a fast sedan 5th series"
        },
        {
            "make": "Opel",
            "model": "335i",
            "year": 2007,
            "carImage": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/p90411287-highres-the-new-bmw-m5-cs-01-1617902730.jpg?crop=0.641xw:0.640xh;0.209xw,0.334xh&resize=980:*",
            "description": "this is a fast sedan 5th series"
        },
    ]


router.get('/', async (req, res) => {
    res.json(cars)
})

module.exports = router;