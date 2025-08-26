
import express from "express";
import { ejecutarValidacion } from "./filtros/validaciones.js";
import { readFileSync } from "fs";

const productos = JSON.parse(
  readFileSync(new URL("../data/productos.json", import.meta.url))
);

const app = express();
app.use(express.json());

app.post("/productos/filtrar", (req, res) => {
  const filtros = req.body; // 

  const resultado = productos.filter((producto) =>
    filtros.every((f) => ejecutarValidacion(f.fn, f.values, producto))
  );

  res.json(resultado);
});

const PORT = 3000;
app.listen(PORT, () =>
  console.log(`🚀 Servidor escuchando en http://localhost:${PORT}`)
);
