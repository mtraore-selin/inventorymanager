const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const corsOption = {
  origin: ["https://inventorymanager-0frb.onrender.com"],
  // origin: ["http://localhost:3000"],
  methods: ["GET", "POST", "DELETE"],
  credentials: true,
};
app.use(cors(corsOption));
app.use(express.static("public"));

app.use("/", require("./routes/user.routes.js"));
app.use("/", require("./routes/dashboard.routes.js"));
app.use("/", require("./routes/products.routes.js"));
app.use("/", require("./routes/customers.routes.js"));
app.use("/", require("./routes/suppliers.routes.js"));
app.use("/", require("./routes/orders.routes.js"));
app.use("/", require("./routes/expenses.routes.js"));

// Serve up static assets
app.use(express.static(path.join(__dirname, "../frontend/build")));

// Health check route
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Server is healthy" });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
});

app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});
