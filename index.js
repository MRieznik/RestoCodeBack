const express = require('express');
const app = express();
require("dotenv").config(); 
const connectDB = require("./db/mongodb");
app.use(express.json());    
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;  

const initApp = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });

        await connectDB();
    } catch (error) {
        app.get("/error", (req, res) => {
            res.send("Error de conexión con la base de datos");
          });
          app.use((req, res) => {
            res.redirect("/error404");
          });
    }
};

initApp();