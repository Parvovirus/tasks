const mongoose = require("mongoose");
//const jwt = require("jsonwebtoken");
const users = {

    registro: async (req, res) => {


        console.log("prueba")
        try {
        //   const nombre = req.body.respuesta.name
        //   const apellido = req.body.respuesta.lastname
        //   const email = req.body.respuesta.email
        //   const contrasena = req.body.respuesta.password
    
          
        } catch (error) {
           console.error(error);
           res.send("Error");
        }
      }


};

module.exports = users;
