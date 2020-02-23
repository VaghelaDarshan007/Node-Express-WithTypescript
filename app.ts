import * as express from "express";
import * as productRoutes from "./api/routes/products";
import * as orderRoutes from "./api/routes/orders";

const app = express();

app.use("/products", productRoutes);
app.use("/orders", orderRoutes);

export = app;

