const mongoose = require("mongoose");
const user = require('../models/users');
//const jwt = require("jsonwebtoken");
const users = {

  registro: async (req, res) => {


    try {
      const { email, pass, pass2, nick } = req.body
      let usuario = await user.findOne({ email: email });
      
      //comprobar si el usuario esta ya registrado
      if (usuario) {
        console.log("usuario ya registrado")

        //si el usuario no existe, vamos a comprobar los datos introducidos y lo vamos a crear
      } else {

        if (nick.match(/^[a-z ,.'-]+$/i) && email.match(
          /^[a-zA-Z0-9_\-\.~]{2,}@[a-zA-Z0-9_\-\.~]{2,}\.[a-zA-Z]{2,4}$/) && pass === pass2) {

          //se crea el JSON
          let userJson = {
            _id: new mongoose.Types.ObjectId(),
            nick,
            email,
            pass,

          };

          //se crea el usuario
          let newUser = new user(userJson);

          //se guarda el usuario en la BBDD
          newUser.save(function (err) {
            if (err) throw err;
            console.log("Inserción correcta");

          });


        } else {
          console.log("datos incorectos")
        }
      }
    } catch (error) {
      console.error(error);
      res.send("Error");
    }
  }


};

module.exports = users;


