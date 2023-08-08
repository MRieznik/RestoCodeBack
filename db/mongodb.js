
const mongoose = require("mongoose");
const express = require("express");
require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.log("Error al conectar a la base de datos");
  }
};

module.exports = connectDB;