import express from "express";
import path from "path";
import dotenv from "dotenv";
import cors from "cors";

import db from './models';

const actasRouter = require('./routes/actas');

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
/*
Distritos.sync({force : true}).then(()=>{console.log('creates')});
Provincia.sync({force : true}).then(()=>{console.log('creates')});
CentroPoblado.sync({force : true}).then(()=>{console.log('creates')});

Departamento.sync({force : true}).then(()=>{console.log('creates')});
LugarOcurrencia.sync({force : true}).then(()=>{console.log('creates')});
OficinaRegistral.sync({force : true}).then(()=>{console.log('creates')});
Registrador.sync({force : true}).then(()=>{console.log('creates')});

Nacionalidad.sync({force : true}).then(()=>{console.log('creates')});

Padre.sync({force : true}).then(()=>{console.log('creates')});

Padre.hasOne(Nacionalidad);
Padre.associate()
Nacionalidad.belongsTo(Padre);
console.log()*/
/*
Madre.sync({force : true}).then(()=>{console.log('creates')});
Declarante.sync({force : true}).then(()=>{console.log('creates')});
Nacido.sync({force : true}).then(()=>{console.log('creates')});

ActaNacimiento.sync({force : true}).then(()=>{console.log('creates')});
LibroNacimiento.sync({force : true}).then(()=>{console.log('creates')});*/



/**Test */
/*
Padre
    .sync({force : false})
    .then(()=>{
        return Padre.create({
            nombres: 'Test test',
            apellido_paterno : 'test',
            apellido_materno : 'Tets',
            tipo_identidad : 'LIBRETA MILITAR',
            numero_identidad : '70541894',
            idNacionalidad : 1
        });
    })*/
    /**/ 
db.sequelize.sync({force : true})
    .then(()=>console.log('COneccted'))
    .catch((err)=>console.log(err));/**/


app.listen(process.env.PORT, () =>
  console.log(`Server is listening on port ${process.env.PORT}`)
);
