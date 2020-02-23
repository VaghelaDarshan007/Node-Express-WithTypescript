import * as express from "express";
import * as productRoutes from "./api/routes/products"

const app = express();

app.use("/products", productRoutes);

export = app;

