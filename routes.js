const express = require("express");
const userModel = require("./models");
const app = express();


app.get("/countries",  async (request, response) => {
    const users =   await userModel.find({

    });
  

    response.send(users);

  });

module.exports = app;