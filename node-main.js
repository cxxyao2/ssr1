const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/api/products/:id", (req, res) => {
  const id = req.params.id;

  res.json({ id, name: `Product ${id}`, price: 11.11 });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
