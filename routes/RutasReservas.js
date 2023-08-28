const express = require("express");
const router = express.Router();
const ReservasController = require("../controllers/reservasController");
const comprobacionJwt = require("../middleware/comprobacionJwt");
const autenticacion = require("../middleware/autenticacion");


router.get("/reservas", comprobacionJwt, ReservasController.obtenerReservas);
router.post("/crearReserva", comprobacionJwt, ReservasController.crearReserva);
router.put("/actualizarReserva/:id", autenticacion, ReservasController.actualizarReserva);
router.delete("/eliminarReserva/:id", comprobacionJwt, ReservasController.eliminarReserva);

module.exports = router;
