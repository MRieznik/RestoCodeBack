const express = require("express");
const router = express.Router();

router.get("/admin", (req, res) => {
    res.json({
        error: null,
        data: {
            title: "Ruta Protegida",
            user: req.user
        }
    });
});

module.exports=router