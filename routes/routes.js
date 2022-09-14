//* Se usa para crear un nuevo objeto de enrutador. 
const router = require("express").Router()
const users = require('../controllers/users');

//const { registro} = users;

router.post('/registro', users.registro);

module.exports = router

