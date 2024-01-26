let users = [
  {
    id: 1,
    name: "diego",
    lastname: "guanuco",
    email: "Diego@gmail.com",
    userPost: [],
  },
  {
    id: 2,
    name: "Nico",
    lastname: "guanuco",
    email: "nicolas@gmail.com",
    userPost: [],
  },
  {
    id: 3,
    name: "sergio",
    lastname: "guanuco",
    email: "gioser@gmail.com",
    userPost: [],
  },
];

let posteos = [];

const getUsers = () => users;

const getUserByName = (name) => {
  const userFound = users.filter((user) => user.name === name);

  return userFound.length === 0
    ? { error: "No existen usuarios con el nombre ingresado" }
    : userFound;
};

const getUsersById = (id) => {
  const user = users.find((user) => user.id === +id);

  return !user
    ? { error: "No existe ningún usuario asociado con el ID ingresado" }
    : user;
};

const addUser = (name, lastname, email) => {
  const newUser = {
    id: users.length + 1,
    name,
    lastname,
    email,
    userPost: [],
  };
  users.push(newUser);
  return `El usuario "${name}" ha sido creado con exito`;
};

const updateUser = (id, name, lastname, email) => {
  const user = getUsersById(id);
  if (user.error) return user;

  user.name = name || user.name;
  user.lastname = lastname || user.lastname;
  user.email = email || user.email;

  return "El usuario ha sido actualizado";
};

const deleteUser = (id) => {
  let filteredUsers = users.filter((user) => user.id !== +id);

  if (filteredUsers.length === users.length) {
    return { error: "No es posible eliminar un usuario que no existe" };
  }

  users = filteredUsers;

  return users;
};

// const deleteUser = (id) => {
//   const user = getUsersById(id)

//   if (user.error) return user

//   users = users.filter(user => user.id !== +id)

//   return users;
// };

//----------------------------------------------------------------------//

const getPosteos = () => posteos;

module.exports = {
  getUsers,
  getUserByName,
  getUsersById,
  addUser,
  updateUser,
  deleteUser,
  getPosteos
};
