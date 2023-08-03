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
        console.log("Error al iniciar la aplicación");
    }
};

initApp();

app.use("/api", require("./routes/RutasReservas"));
app.use("/api", require("./routes/RutasUsuarios"));