'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const config = require('../config/config');
const {getModelsFromDirectory} = require('../core/Utils');
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
sequelize
    .authenticate()
    .then(() => {
        console.log('Connected'); 
    })
    .catch((err) => {
        console.error('Erro:', err); 
    });

getModelsFromDirectory(DIR)
    .map((k)=>{
    if(!k.includes('index.js')){
        const model = sequelize['import'](k);
        db[model.name] = model;
    }
})

Object.keys(db).forEach(modelName => {
    console.log(modelName);
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

//Associations 

// Padres 
db.padres.belongsTo(db.nacionalidades, {
    as: 'Nacionalidad',
    foreignKey:{ name :'id_nacionalidad', allowNull: false},
    onDelete : 'CASCADE',
});

// Madres 
db.madres.belongsTo(db.nacionalidades, {
    as: 'Nacionalidad',
    foreignKey:{ name :'id_nacionalidad', allowNull: false},
    onDelete : 'CASCADE',
});
db.madres.belongsTo(db.departamentos, {
    as: 'Departamento',
    foreignKey:{ name :'id_departamento', allowNull: false},
    onDelete : 'CASCADE',
});
db.madres.belongsTo(db.provincias, {
    as: 'Provincia',
    foreignKey:{ name :'id_provincia', allowNull: false},
    onDelete : 'CASCADE',
});
db.madres.belongsTo(db.distritos, {
    as: 'Distrito',
    foreignKey:{ name :'id_distritos', allowNull: false},
    onDelete : 'CASCADE',
});
db.madres.belongsTo(db.centros_poblados, {
    as: 'CentroPoblado',
    foreignKey:{ name :'id_centro_poblado', allowNull: true},
    onDelete : 'CASCADE',
});

//Nacidos

db.nacidos.belongsTo(db.lugares_ocurrencias, {
    as: 'LugarNacimiento',
    foreignKey:{ name :'id_lugar_ocurrencia', allowNull: false},
    onDelete : 'CASCADE',
});
db.nacidos.belongsTo(db.departamentos, {
    as: 'Departamento',
    foreignKey:{ name :'id_departamento', allowNull: false},
    onDelete : 'CASCADE',
});
db.nacidos.belongsTo(db.provincias, {
    as: 'Provincia',
    foreignKey:{ name :'id_provincia', allowNull: false},
    onDelete : 'CASCADE',
});
db.nacidos.belongsTo(db.distritos, {
    as: 'Distrito',
    foreignKey:{ name :'id_distritos', allowNull: false},
    onDelete : 'CASCADE',
});
db.nacidos.belongsTo(db.centros_poblados, {
    as: 'CentroPoblado',
    foreignKey:{ name :'id_centro_poblado', allowNull: true},
    onDelete : 'CASCADE',
});
db.nacidos.belongsTo(db.padres, {
    as: 'Padre',
    foreignKey:{ name :'id_padre', allowNull: false},
    onDelete : 'CASCADE',
});
db.nacidos.belongsTo(db.madres, {
    as: 'Madre',
    foreignKey:{ name :'id_madre', allowNull: false},
    onDelete : 'CASCADE',
});


db.nacidos.belongsToMany(db.declarantes, { 
    through :'nacidos_declarantes', 
    foreignKey: 'id_nacido',
    onDelete : 'CASCADE'});
db.declarantes.belongsToMany(db.nacidos, { 
    foreignKey: 'id_declarante',
    through :'nacidos_declarantes',
    onDelete : 'CASCADE'});


db.nacidos.hasOne(db.actas_nacimientos, {
    foreignKey: 'id_nacido',
    onDelete : 'CASCADE'
});
db.registradores.hasOne(db.actas_nacimientos,{
    foreignKey: 'id_registrador',
    onDelete : 'CASCADE'
});
db.oficinas_registrales.hasOne(db.actas_nacimientos,{
    foreignKey: 'id_oficina_registral',
    onDelete : 'CASCADE'
});

db.actas_nacimientos.belongsTo(db.libros_nacimientos, {
    as: 'Libro Nacimiento',
    foreignKey:{ name :'id_libro_nacimiento', allowNull: false},
    onDelete : 'CASCADE',
})

module.exports = db;