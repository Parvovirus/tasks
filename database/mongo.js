
// para conectar la base de datos
const mongoose = require("mongoose");

// url del mongo
const url = `mongodb+srv://jorge:7wDopkyNkSEhcuUe@cluster0.ugnazym.mongodb.net/tasks`;

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log("Connect DateBase");
    })
    .catch((err) => {
        console.error(err);
    });

