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
    app.get("/error", (req, res) => {
      res.send("Error de conexión con la base de datos");
    });
    app.use((req, res) => {
      res.redirect("/error404");
    });
  }
};

module.exports = connectDB;
