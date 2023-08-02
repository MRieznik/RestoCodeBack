const express = require('express');
const router = express.Router();
const ReservasController = require("../controllers/reservasController");

router.get("/reservas", ReservasController.obtenerReservas);
router.post("/crearReserva", ReservasController.crearReserva);
router.put("/actualizarReserva/:id", ReservasController.actualizarReserva); 
router.delete("/eliminarReserva/:id", ReservasController.eliminarReserva);



module.exports = router;