import express from "express";
import path from "path";
import dotenv from "dotenv";
import cors from "cors";
import connection from './db/connection';

import LugarOcurrencia from './models/common/LugarOcurrencia';
import CentroPoblado from './models/common/CentroPoblado';
import Nacionalidad from './models/common/Nacionalidad';
import Distritos from './models/common/Distritos';
import Padre from './models/nacimientos/Padre';
import Madre from './models/nacimientos/Madre';
import Declarante from './models/nacimientos/Declarante';
import Nacido from './models/nacimientos/Nacido';
dotenv.config();

const app = express();
app.use(express.static(__dirname + "/src"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
LugarOcurrencia.sync({force : false}).then(()=>{console.log('creates')});
Distritos.sync({force : false}).then(()=>{console.log('creates')});

Madre.sync({force : true}).then(()=>{console.log('creates')})
Declarante.sync({force : true}).then(()=>{console.log('creates')})
Nacido.sync({force : true}).then(()=>{console.log('creates')})
/**Test */
/*
Padre
    .sync({force : false})
    .then(()=>{
        return Padre.create({
            nombres: 'Test test',
            apellidoPaterno : 'test',
            apellidoMaterno : 'Tets',
            tipoIdentidad : 'LIBRETA MILITAR',
            numeroIdentidad : '70541894',
            idNacionalidad : 1
        });
    })*/

app.listen(process.env.PORT, () =>
  console.log(`Server is listening on port ${process.env.PORT}`)
);
