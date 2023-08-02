const mongoose = require("mongoose");
const { Schema } = mongoose;

const reservaSchema = new Schema(
  {
    nombre: { type: String, 
        required: true, 
        max: 15,
        min: 3, 
        trim: true },
    apellido: { type: String, 
        required: true, 
        max: 20, 
        min: 3, 
        trim: true },
    fecha: { type: Date, 
        required: true, 
        trim: true },
    hora: { type: String, 
        required: true, 
        match: /^([01]\d|2[0-3]):([0-5]\d)$/,
        trim: true },
    personas: { type: Number, 
        required: true, 
        max: 30, 
        min: 1, 
        trim: true },
    comentarios: { type: String, 
        required: true, 
        max: 50,
        min: 5, 
        trim: true },
  },
  { versionKey: false }
);

const ReservaModel = mongoose.model("reservas", reservaSchema);
module.exports = ReservaModel;