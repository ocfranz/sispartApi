const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const cors = require("cors");

const db = require('./models');

const commonRoutes = require('./routes/common');
const nacimientoRouters = require('./routes/nacimientos');

dotenv.config();

const app = express();
app.use(express.static(__dirname + "/src"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

db.sequelize.sync({force : true})
    .then(()=>{
        console.log('======= Tables build ===========')
    })
    .catch((err)=>console.log(err));/**/
app.use('/common', commonRoutes);
app.use('/nacimientos', nacimientoRouters);


app.listen(process.env.PORT, () =>
  console.log(`Server is listening on port ${process.env.PORT}`)
);
