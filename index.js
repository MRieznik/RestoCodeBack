const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const cors = require("cors");
app.use(cors());
require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://restocode:DeqcYroq7H1X4XKS@restocode.e2zkoe4.mongodb.net/?retryWrites=true&w=majority";

const initApp = async () => {
  try {
    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });

    async function run() {
      try {
        await client.connect();
        await client.db("admin").command({ ping: 1 });
        console.log(
          "¡Se realizó un ping a tu implementación. Te has conectado exitosamente a MongoDB!"
        );
      } finally {
        await client.close();
      }
    }

    await run(); // Espera a que se complete la conexión a MongoDB

    // Ahora que la conexión a MongoDB está establecida, puedes iniciar la aplicación Express
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
    });

    console.log("Iniciando la aplicación");
  } catch (error) {
    console.log("Error al iniciar la aplicación", error);
  }
};

initApp();


app.use("/api", require("./routes/RutasReservas"));
app.use("/api", require("./routes/RutasUsuarios"));
