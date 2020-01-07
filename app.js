import express from "express";
import path from "path";
import dotenv from "dotenv";
import cors from "cors";

import db from './models';

const nacimientoRouters = require('./routes/nacimientos');

import LugarOcurrencia from './models/common/LugarOcurrencia';
import Provincia from './models/common/Provincia';
import Distritos from './models/common/Distritos';
import CentroPoblado from './models/common/CentroPoblado';
import Departamento from './models/common/Departamento';
import Nacionalidad from './models/common/Nacionalidad';

import Padre from './models/nacimientos/Padre';
import Madre from './models/nacimientos/Madre';
import Declarante from './models/nacimientos/Declarante';
import Nacido from './models/nacimientos/Nacido';
import OficinaRegistral from './models/common/OficinaRegistral';
import ActaNacimiento from './models/nacimientos/ActaNacimiento';
import Registrador from './models/common/Registrador';
import LibroNacimiento from './models/nacimientos/LibroNacimientos';
dotenv.config();

const app = express();
app.use(express.static(__dirname + "/src"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

db.sequelize.sync({force : false})
    .then(()=>{
        console.log('======= Tables build ===========')
    })
    .catch((err)=>console.log(err));/**/

app.use('/nacimientos', nacimientoRouters);

app.listen(process.env.PORT, () =>
  console.log(`Server is listening on port ${process.env.PORT}`)
);
