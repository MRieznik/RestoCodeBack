const express = require('express');
const router = express.Router();
const ReservasController = require("../controllers/reservasController");

router.get("/reservas", ReservasController.obtenerReservas);
router.post("/crearReserva", ReservasController.crearReserva);
router.put("/actualizarReserva", ReservasController.actualizarReserva); 
router.delete("/eliminarReserva", ReservasController.eliminarReserva);



module.exports = router;