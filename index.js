const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const cors = require("cors");
app.use(cors());
require("dotenv").config();
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://restocode:DeqcYroq7H1X4XKS@restocode.e2zkoe4.mongodb.net/?retryWrites=true&w=majority";



// const PORT = process.env.PORT || 3000;

const initApp = async () => {
  try {
    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      }
    });

    async function run() {
      console.log("Iniciando la aplicación");
      try {
        await client.connect();
        await client.db("admin").command({ ping: 1 });
        console.log("Conectado con MongoDB");
      } finally {
        await client.close();
      }
    }
    run().catch(console.dir);


  } catch (error) {
    console.log("Error al iniciar la aplicación");
  }
};

initApp();

app.use("/api", require("./routes/RutasReservas"));
app.use("/api", require("./routes/RutasUsuarios"));

