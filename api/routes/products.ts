import * as express from 'express';
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "GET: Products will displayed here!!!"
    });
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: "POST: Products will displayed here!!!"
    });
});

export = router;