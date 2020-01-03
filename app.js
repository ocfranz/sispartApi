import express from "express";
import path from "path";
import dotenv from "dotenv";
import cors from "cors";
import connection from './db/connection';

import Provincia from './models/common/Provincia';
dotenv.config();

const app = express();
app.use(express.static(__dirname + "/src"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded())

/**Test */
/*
Provincia
    .sync({ force: true })
    .then(() => {
        
        return Provincia.create({

            ubigeo: '134434',
            provincia: 'Hancock'
        });
      });*/

app.listen(process.env.PORT, () =>
  console.log(`Server is listening on port ${process.env.PORT}`)
);
