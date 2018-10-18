const express = require("express");
const brands = require("../routes/brands");
const types = require("../routes/types");
const register = require("../routes/register");
const login = require("../routes/login");
const users = require("../routes/users");
const error = require("../middleware/error");

module.exports = function(app) {
  app.use(express.json());
  app.use("/api/brands", brands);
  app.use("/api/types", types);
  app.use("/api/register", register);
  app.use("/api/login", login);
  app.use("/api/users", users);
  app.use(error);
};
