"use strict";
const express = require("express");
const productRoutes = require("./api/routes/products");
const app = express();
app.use("/products", productRoutes);
module.exports = app;
//# sourceMappingURL=app.js.map