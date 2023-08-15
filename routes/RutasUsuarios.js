const express = require("express");
const router = express.Router();
const UsuariosController = require("../controllers/usuariosController");

router.post("/register", UsuariosController.register);
router.post("/login", UsuariosController.loginUsuario);
router.get("/usuarios", UsuariosController.getUsers);
router.put("/updateUser/:id", UsuariosController.updateUser);
router.delete("/deleteUser/:id", UsuariosController.deleteUser);

module.exports = router;
