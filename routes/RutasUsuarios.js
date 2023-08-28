const express = require("express");
const router = express.Router();
const UsuariosController = require("../controllers/usuariosController");
const comprobacionJwt = require("../middleware/comprobacionJwt");
const autenticacion = require("../middleware/autenticacion");

router.post("/register", UsuariosController.register);
router.post("/login", UsuariosController.loginUsuario);
router.get("/usuarios", UsuariosController.getUsers);
router.put("/updateUser/:id", autenticacion, UsuariosController.updateUser);
router.delete("/deleteUser/:id", autenticacion, UsuariosController.deleteUser);

module.exports = router;
