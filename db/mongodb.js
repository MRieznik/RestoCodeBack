const mongoose = require("mongoose");
const express = require("express");
require("dotenv").config();
const { MongoClient } = require("mongodb");
const uri = "mongodb+srv://restocode:<password>@restocode.e2zkoe4.mongodb.net"

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectDB() {
  try {
   await client.connect();
    console.log("Conectado a la base de datos");
  } catch (error) {
    console.log("Error al conectar a la base de datos");
  }
};

module.exports = connectDB;
