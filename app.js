import express from "express";
import path from "path";
import dotenv from "dotenv";
import cors from "cors";
import connection from './db/connection';

import Departamento from './models/common/Departamento';
dotenv.config();

const app = express();
app.use(express.static(__dirname + "/src"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded())

Departamento
    .sync({ force: true })
    .then(() => {
        
        return Departamento.create({
           
            ubigeo: '13444',
            departamento: 'Hancock'
        });
      });

Departamento
    .sync({ force: true })
    .then(() => {
    
          return Departamento.create({
             
              ubigeo: '13444',
              departamento: 'Ayacucho'
          });
        });


app.listen(process.env.PORT, () =>
  console.log(`Server is listening on port ${process.env.PORT}`)
);
