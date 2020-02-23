"use strict";
const express = require("express");
const router = express.Router();
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "GET: Products will displayed here!!!"
    });
});
router.post('/', (req, res, next) => {
    const productDetails = {
        name: req.body.name,
        price: req.body.price
    };
    res.status(201).json({
        message: "POST: Products will displayed here!!!",
        Details: productDetails
    });
});
router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    if (id === "special") {
        res.status(200).json({
            message: "Special ID",
            id: id
        });
    }
    else {
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
module.exports = router;
//# sourceMappingURL=products.js.map