const express = require("express");

const loginRoutes = express.Router();

const dbo = require("../db/connect");

const ObjectId = require("mongodb").ObjectId;


// This section will help you create a new doc.
loginRoutes.route("/login/add").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myobj = {
    email: req.body.email,
    password: req.body.password,
    canvasId: req.body.canvasId,
  };
  db_connect.collection("user_info").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});


module.exports = loginRoutes;