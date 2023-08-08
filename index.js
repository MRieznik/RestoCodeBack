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

const MongoClient = require('mongodb').MongoClient;

const uri = 'mongodb+srv://restocode:DeqcYroq7H1X4XKS@restocode.e2zkoe4.mongodb.net';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function conectarMongoDB() {
  try {
    await client.connect();
    console.log('Conexión exitosa a MongoDB Atlas');
    
    // Aquí puedes realizar operaciones en la base de datos
    
  } catch (error) {
    console.error('Error al conectar a MongoDB Atlas', error);
  }
}

conectarMongoDB();


app.use("/api", require("./routes/RutasReservas"));
app.use("/api", require("./routes/RutasUsuarios"));

