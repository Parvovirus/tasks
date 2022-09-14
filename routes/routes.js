//* Se usa para crear un nuevo objeto de enrutador. 
const router = require("express").Router()
const users = require('../controllers/users');

const { registro, loguear} = users;

router.post('/registro', registro);
router.post('/loguear', loguear);
module.exports = router

