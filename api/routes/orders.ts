import * as express from 'express';
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "GET: orders will displayed here!!!"
    });
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: "POST: orders will displayed here!!!"
    });
});

// simple comment
router.get('/:orderId', (req, res, next) => {
    const id = req.params.orderId;
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

router.delete('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: "Deleted successfully!!!"
    });
});

export = router;