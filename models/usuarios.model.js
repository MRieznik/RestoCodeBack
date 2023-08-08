const mongoose = require("mongoose");
const { Schema } = mongoose;

const usuarioSchema = new Schema({

    nombre: {
        type: String,
        required: true,
        max: 30,
        min: 3,
        trim: true
    },
    apellido: {
        type: String,
        required: true,
        max: 30,
        min: 3,
        trim: true
    },   
    email: {
        type: String,
        required: true,
        unique: true,
        max: 30,
        min: 7,
        trim: true
    },
    telefono: {
        type: String,
        required: true,
        unique: true,
        max: 15,       
        min: 10,
        trim: true
    },
    contrasenia: {
        type: String,
        required: true,
        max: 30,
        min: 3,
        trim: true
    },
    rolUsuario: {
        type: String,  
        required: true,      
        max: 30,
        min: 3,
        trim: true
    }

}, { versionKey: false });

const UsuariosModel = mongoose.model("usuarios", usuarioSchema);
module.exports = UsuariosModel;
