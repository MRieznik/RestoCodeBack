const ReservaModel = require("../models/reserva.model");

//GET: Leer
const obtenerReservas = async (req, res) => {
  try {
    const reservas = await ReservaModel.find();
    res.status(200).json(reservas);
  } catch (error) {
    res.status(400).json("Error al obtener las reservas");    
  }
};

//POST: Crear
const crearReserva = async (req, res) => {
  try {
    const { fecha, hora } = req.body;

     // Obtener la fecha y hora actual
     const horaActual = new Date();

     // Verificar si la fecha y hora de la reserva están en el futuro
     const fechaHoraReserva = new Date(`${fecha}T${hora}`);
    

    // Verificar si existe una reserva con la misma fecha y hora
    const reservaExistente = await ReservaModel.findOne({
      $and: [{ fecha }, { hora }],
    });
    
    if (fechaHoraReserva <= horaActual) {
      return res
        .status(400)
        .json("No se puede reservar en un horario anterior al actual.");
    }else if (reservaExistente) {
      return res
        .status(409)
        .json("Ya existe una reserva con la misma fecha y hora.");
    } else {
      // Si no existe, crear la nueva reserva
      const reserva = new ReservaModel(req.body);
      await reserva.save();
      res.status(201).json(reserva);
    }
  } catch (error) {
    res.status(400).json("Error al crear la reserva");
  }
};
//PUT: Actualizar
const actualizarReserva = async (req, res) => {
  try {
    const id = req.params.id;
    const reserva = await ReservaModel.findById(id);

    if (reserva) {
      // Verificar si existe una reserva con la misma fecha y hora
      const { fecha, hora } = req.body;
      const reservaExistente = await ReservaModel.findOne({
        $and: [{ fecha }, { hora }],
      });

      if (reservaExistente && reservaExistente._id.toString() !== id) {
        return res
          .status(409)
          .json("Ya existe una reserva con la misma fecha y hora.");
      }

      // Actualizar los datos de la reserva
      reserva.fecha = fecha;
      reserva.hora = hora;
      reserva.invitados = req.body.invitados;
      await reserva.save();
      res.json("Reserva actualizada");
    } else {
      res.status(404).json("Reserva no encontrada");
    }
  } catch (error) {
    res.status(400).json("Error al actualizar la reserva");
  }
};

//DELETE: Eliminar
const eliminarReserva = async (req, res) => {
  try {
    const id = req.params.id;
    const reserva = await ReservaModel.findById(id);
    if (reserva) {
      await ReservaModel.deleteOne({ _id: id });
      res.status(200).json("Reserva eliminada");
    } else {
      res.status(404).json("Reserva no encontrada");
    }
  } catch (error) {
    res.status(400).json("Error al eliminar la reserva");
  }
};

//----------------------------------------------
module.exports = {
  obtenerReservas,
  crearReserva,
  actualizarReserva,
  eliminarReserva,
};
