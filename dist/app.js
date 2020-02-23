"use strict";
const express = require("express");
const productRoutes = require("./api/routes/products");
const orderRoutes = require("./api/routes/orders");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const app = express();
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
// convert input* data into json format: you can enter data in json format
app.use(bodyParser.json());
app.use((req, res, next) => {
    // used for give access of API to particular user/url
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    if (req.method === 'OPTIONS') {
        // tell browser that which method it has access for this API
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
        res.writeHead(200);
        res.end();
    }
    // must be here, if not then flow will be blocked.
    next();
});
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