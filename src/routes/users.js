const router = require("express").Router();

const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  addBookToUser,
  deleteBookFromUser
} = require("../controllers/users");

router.get("/users", getUsers);
router.get("/users/:idUser", getUser);
router.post("/users", createUser);
router.patch("/users/:idUser", updateUser);
router.delete("/users/:idUser", deleteUser);
router.post("/users/:idUser/:idBook", addBookToUser);
router.delete("/users/:idUser/:idBook", deleteBookFromUser);

module.exports = router;
