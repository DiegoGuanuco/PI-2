// POSTEOS
// RUTA GET => me debe traer todos los posteos buscar posteos por nombre
// RUTA POST => debe crear un posteo
// RUTA GET /:id => me debe traer el posteo solicitado
// RUTA PUT => debe actualizar un posteo
// RUTA DELETE /:id => debe eliminar el posteo solicitado

const { Router } = require("express");
const posteosRouter = Router();
const { getPosteos } = require("../controllers/usersControllers");

posteosRouter.get("/", (req, res) => {
  const posteos = getPosteos()
  res.status(200).json(posteos)
});

module.exports = posteosRouter;
