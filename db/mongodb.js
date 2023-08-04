const mongoose = require("mongoose");
const express = require("express");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://0.0.0.0:27017/restocode", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.log("Error al conectar a la base de datos");
  }
};

module.exports = connectDB;
