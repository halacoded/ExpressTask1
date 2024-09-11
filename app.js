const express = require("express");
const app = express(); //app is instance of express

app.get("/", (req, res) => {
  console.log("get");
  return res.json("hala");
});

app.listen(800, () => {
  console.log("HALA");
});
