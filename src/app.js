const express = require("express");
const connectDB = require("./database/connection");
const productRoutes = require("./routes/productRoutes");
const customerRoutes = require("./routes/customerRoutes");
const orderRoutes = require("./routes/orderRoutes");
const saleRoutes = require("./routes/saleRoutes");

const app = express();

connectDB();

app.use(express.json());
app.use("/ecommerce", productRoutes);
app.use("/ecommerce", customerRoutes);
app.use("/ecommerce", orderRoutes);
app.use("/ecommerce", saleRoutes);

module.exports = app;
