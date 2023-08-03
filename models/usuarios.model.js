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
        type: Number,
        required: true,
        unique: true,       
        min: 10,
        trim: true
    },
    password: {
        type: String,
        required: true,
        max: 30,
        min: 3,
        trim: true
    },
    rol: {
        type: String,
        required: true,
        max: 30,
        min: 3,
        trim: true
    }

}, { versionKey: false });

const UsuariosModel = mongoose.model("usuarios", usuarioSchema);
module.exports = UsuariosModel;