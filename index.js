const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const cors = require("cors");
const client = require("./db/mongodb");
app.use(cors());
require("dotenv").config();



// const PORT = process.env.PORT || 3000;

const initApp = async () => {
  try {
    // app.listen(PORT, () => {
    //   // console.log(`Server running on port ${PORT}`);
    // });
    console.log("Iniciando la aplicación");
    await client();
  } catch (error) {
    console.log("Error al iniciar la aplicación");
  }
};

initApp();

app.use("/api", require("./routes/RutasReservas"));
app.use("/api", require("./routes/RutasUsuarios"));

