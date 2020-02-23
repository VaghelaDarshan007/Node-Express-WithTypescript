import * as express from "express";
import * as productRoutes from "./api/routes/products";
import * as orderRoutes from "./api/routes/orders";
import * as morgan from "morgan";
import * as bodyParser from "body-parser";

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
// convert input* data into json format: you can enter data in json format
app.use(bodyParser.json());
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

export = app;

