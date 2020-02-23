"use strict";
const express = require("express");
const productRoutes = require("./api/routes/products");
const orderRoutes = require("./api/routes/orders");
const morgan = require("morgan");
const app = express();
app.use(morgan('dev'));
app.use("/products", productRoutes);
app.use("/orders", orderRoutes);
app.use((req, res, next) => {
    const err = new Error("Not Found");
    next(err);
});
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        message: err.message
    });
});
module.exports = app;
//# sourceMappingURL=app.js.map