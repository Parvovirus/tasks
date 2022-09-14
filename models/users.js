// // Creación de la actividad
// const mongoose = require("mongoose");
// const AutoIncrement = require('mongoose-sequence')(mongoose);

// const objetoUserSchema = {
//     name: String,
//     id_Category: Number,
//     description: String,
//     sessions: Array,
//     banner: String,
//     bannerSelec: String
    
// };

// const userSchema = mongoose.Schema(objetoUserSchema, { versionKey: false })

// userSchema.plugin(AutoIncrement, { inc_field: 'idActivity' });

// const Activity = mongoose.model("activities", userSchema);


// // para exportar
// module.exports = Activity;

const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const usersSchema = new Schema({
  nick: String,
  email: String,
  pass: String,
}, {
  versionKey: false
}
);

const users = model('users', usersSchema);

module.exports = users;