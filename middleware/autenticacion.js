const jwt = require("jsonwebtoken");
const UsuariosModel = require("../models/usuarios.model");

const autenticacion = async (req, res, next) => {
  try {
    const token = req.headers["auth-token"];
    const { _id } = jwt.verify(token, process.env.SECRET_KEY);
    const tokenDecode = jwt.decode(token);
    const id = tokenDecode.id;
    const rol = tokenDecode.rolUsuario;
    const usuario = await UsuariosModel.findById(id);

    if (!usuario) {
      return res.status(401).json("Usuario no autorizado");
    }

    if (rol !== "admin") {
      return res.status(401).json("Usuario no autorizado");
    }
    next();
  } catch (error) {
    res.status(401).json("Usuario no autorizado");
  }
};

module.exports = autenticacion;
