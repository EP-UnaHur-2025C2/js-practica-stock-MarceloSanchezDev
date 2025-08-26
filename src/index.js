const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello");
});

const mensaje = "escuchando en el puerto http://localhost:3000";
app.listen(3000, () => {
  console.log(mensaje);
});
