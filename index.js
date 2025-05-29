const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/personal_info", (req, res) => {
  res.send({
    name: "Ashish Yadav",
    age: 21,
    contact_no: 8707456060,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
