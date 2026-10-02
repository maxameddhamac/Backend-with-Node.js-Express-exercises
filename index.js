const express = require("express");
const app = express();

let users = [
  { id: 1, name: "Ayaan" },
  { id: 2, name: "Fatima" },
  { id: 3, name: "Zubeyr" },
];
app.use(express.json());

app.get("/", (req, res) => {
  res.json(users);
});

app.post("/users", (req, res) => {
  const userdata = req.body;
  res.send(`user created with email:${userdata.email}`);
});
app.listen(3000, () => {
  console.log("server is running on https://localhost:3000");
});
