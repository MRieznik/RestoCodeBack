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

// const PORT = process.env.PORT || 3000;

const initApp = async () => {
  try {
    // app.listen(PORT, () => {
    //   // console.log(`Server running on port ${PORT}`);
    // });
    // Create a MongoClient with a MongoClientOptions object to set the Stable API version
    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });

    async function run() {
      try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log(
          "Pinged your deployment. You successfully connected to MongoDB!"
        );
      } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
      }
    }
    console.log("Iniciando la aplicación");
  } catch (error) {
    console.log("Error al iniciar la aplicación");
  }
};

initApp();

app.use("/api", require("./routes/RutasReservas"));
app.use("/api", require("./routes/RutasUsuarios"));
