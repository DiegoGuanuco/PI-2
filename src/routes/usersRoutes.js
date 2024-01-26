const { Router } = require("express");
const usersRoutes = Router();
const {
  getUsers,
  getUserByName,
  getUsersById,
  addUser,
  updateUser,
  deleteUser
} = require("../controllers/usersControllers");

//RUTA GET => debe traer a todos los usuarios o buscar por nombre
//RUTA GET /:id => debe traer el usuario con el id correspondiente
//RUTA POST => para crear un nuevo usuario
//RUTA PUT => debe modificar el usuario correspondiente
//RUTA DELETE /:id => Debe eliminar al usuario correspondiente.
//revisar el email

usersRoutes.get("/", (req, res) => {
  try {
    const { name } = req.query;

    if (name === undefined) res.status(200).json(getUsers());

    const user = getUserByName(name);

    if (user.error) throw Error(user.error);

    res.status(200).json(user);
  } catch (error) {
    res.status(404).json(error.message);
  }
});

usersRoutes.get("/:id", (req, res) => {
  try {
    const { id } = req.params;

    const user = getUsersById(id);

    if (user.error) throw Error(user.error);

    res.status(200).json(user);
  } catch (error) {
    res.status(404).json(error.message);
  }
});

usersRoutes.post("/", (req, res) => {
  try {
    const { name, lastname, email } = req.body;

    if (!name || !lastname || !email)
      throw Error("Debes ingresar todos los datos");

    const newUser = addUser(name, lastname, email);

    res.status(200).send(newUser);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

usersRoutes.put("/", (req, res) => {
  try {
    const { id, name, lastname, email } = req.body;

    if (!id) throw Error("Debes ingresar el ID");

    const user = updateUser(id, name, lastname, email);

    if (user.error) throw Error(user.error);
    res.status(200).send(user);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

usersRoutes.delete("/:id", (req, res) => {
  try {
    const { id } = req.params;

    const users = deleteUser(id)

    if(users.error) throw Error(users.error)

    res.status(200).send("Usuario eliminado con exito")

  } catch (error) {
    res.status(404).send(error.message)
  }
});



module.exports = usersRoutes;
