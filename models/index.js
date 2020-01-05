'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const config = require('../config/config');
const db = {};
const DIR  = `${__dirname}`;
const { database, username, password, host} = config.db;

const sequelize = new Sequelize(database, username, password, 
    {
    host : host,
    dialect : 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
     },
});
sequelize.authenticate()
    .then(() => {
        console.log('Connected'); 
    })
    .catch((err) => {
        console.error('Erro:', err); 
    });

fileList(DIR).map((k,i)=>{
    console.log(k)
    if(!k.includes('index.js')){
        const model = sequelize['import'](k);
        db[model.name] = model;
    }
})

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        console.log(db)
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

function fileList(dir) {
    return fs.readdirSync(dir).reduce(function(list, file) {
      var name = path.join(dir, file);
      var isDir = fs.statSync(name).isDirectory();
      return list.concat(isDir ? fileList(name) : [name]);
    }, []);
  }