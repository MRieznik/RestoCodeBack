const UsuariosModel = require("../models/usuarios.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//POST registrar un usuario
const register = async (req, res) => {
  try {
    const { nombre, apellido, email, telefono, contrasenia, rolUsuario } = req.body;
    const hash = await bcrypt.hash(contrasenia, 10);

    const usuario = new UsuariosModel({
      nombre,
      apellido,
      email,
      telefono,
      contrasenia: hash,
      rolUsuario,
    });
    await usuario.save();
    res.status(201).json("Usuario creado");
  } catch (error) {
    res.status(400).send(error);
  }
};

//POST loguear un usuario
const loginUsuario = async (req, res) => {
  const user = await UsuariosModel.findOne({ email: req.body.email });     

    try {
        //compruebo que exista el email enviado
           
        if (!user) {
            return res.status(400).json("Usuario y/o Contraseña incorrecto");
        }
        //compruebo que la contraseña coincida con la registrada
        const match = await bcrypt.compare(req.body.contrasenia, user.contrasenia);    
        if (!match) {
            return res.status(400).json("Usuario y/o Contraseña incorrecto");
        }
    } catch (error) {
        res.status(400).json("Error al loguear usuario");
    };
   

    // generar el token

    const token = jwt.sign(
        {
        id: user._id,
        nombre: user.nombre,
        apellido: user.apellido,
        telefono: user.telefono,
        email: user.email,
        rolUsuario: user.rolUsuario,
        },
        process.env.SECRET_KEY,
        { expiresIn: "1d" }
    );

    res.header("auth-token", token).json({
        error: null,
        data: { token },
    });
};

//GET traer todos los usuarios
const getUsers = async (req, res) => {
  try {
    const usuarios = await UsuariosModel.find();
    res.json(usuarios);
  } catch (error) {
    res.status(400).json("Usuarios no encontrados");
  }
};

//PUT actualizar un usuario
const updateUser = async (req, res) => { 
    try {
        const id = req.params.id;
        const user = await UsuariosModel.findById(id);
        if (user) {
          user.nombre = req.body.nombre;
          user.apellido = req.body.apellido;
          user.telefono = req.body.telefono;          
          const userActualizado = await user.save();
          res.status(200).json("Usuario actualizado");          
        } else {
          res.status(404).json("Usuario no encontrado");
        }
      } catch (error) {
        res.status(400).json("Usuario no actualizado");
      }
}

 //DELETE borrar un usuario
 const deleteUser = async (req, res) => {
    try {
      const id = req.params.id;
      const user = await UsuariosModel.findById(id);
      if (user) {
        await UsuariosModel.deleteOne({ _id: id });
        res.status(200).json("Usuario eliminado");
      } else {
        res.status(404).json("Usuario no encontrado");
      }
    } catch (error) {
      res.status(400).json("Usuario no eliminado");
    }
  };


module.exports = {
  register,
  loginUsuario,
  getUsers,
  updateUser,
  deleteUser
};
