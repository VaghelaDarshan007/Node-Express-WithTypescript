import * as express from 'express';
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "GET: Products will displayed here!!!"
    });
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: "POST: Products will displayed here!!!"
    });
});

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    if(id === "special"){
        res.status(200).json({
            message: "Special ID",
            id: id
        });
    } else {
        res.status(200).json({
            message: "successfully entered in ID section!!!",
            id: id
        });
    }
});

router.patch('/:productId', (req, res, next) => {
    res.status(200).json({
        message: "product updated!!!"
    });
});

router.delete('/:productId', (req, res, next) => {
    res.status(200).json({
        message: "Deleted successfully!!!"
    });
});

export = router;