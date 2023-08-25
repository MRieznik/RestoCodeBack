const ReservaModel = require("../models/reserva.model");

const obtenerReservas = async (req, res) => {
  try {
    const reservas = await ReservaModel.find();
    res.status(200).json(reservas);
  } catch (error) {
    res.status(400).json("Error al obtener las reservas");
  }
};

const crearReserva = async (req, res) => {
  try {
    const { fecha, hora } = req.body;

    const horaActual = new Date();

    const fechaHoraReserva = new Date(`${fecha}T${hora}`);

    const reservaExistente = await ReservaModel.findOne({
      $and: [{ fecha }, { hora }],
    });

    if (fechaHoraReserva <= horaActual) {
      return res
        .status(400)
        .json("No se puede reservar en un horario anterior al actual.");
    } else if (reservaExistente) {
      return res
        .status(409)
        .json("Ya existe una reserva con la misma fecha y hora.");
    } else {
      const reserva = new ReservaModel(req.body);
      await reserva.save();
      res.status(201).json(reserva);
    }
  } catch (error) {
    res.status(400).json("Error al crear la reserva");
  }
};

const actualizarReserva = async (req, res) => {
  try {
    const id = req.params.id;
    const reserva = await ReservaModel.findById(id);

    if (reserva) {
      const { fecha, hora } = req.body;
      const reservaExistente = await ReservaModel.findOne({
        $and: [{ fecha }, { hora }],
      });
      const horaActual = new Date();
      const fechaHoraReserva = new Date(`${fecha}T${hora}`);

      if (fechaHoraReserva <= horaActual) {
        return res
          .status(400)
          .json("No se puede reservar en un horario anterior al actual.")
      } else if (reservaExistente && reservaExistente._id.toString() !== id) {
        return res
          .status(409)
          .json("Ya existe una reserva con la misma fecha y hora.");
      }
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

module.exports = {
  obtenerReservas,
  crearReserva,
  actualizarReserva,
  eliminarReserva,
};
