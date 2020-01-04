const Sequelize = require('sequelize');
const connection = require('../../db/connection');

const OficinaRegistral = connection.define(
    'oficinas_registrales',
    {
        id :{
            primaryKey : true,
            type : Sequelize.INTEGER,
            autoIncrement : true,  
        },
        /*  
        idDepartamento : {
            type : Sequelize.INTEGER,
            references :{
                model : 'departamentos',
                key : 'id'
            },
            allowNull : false
        },
        idProvincia : {
            type : Sequelize.INTEGER,
            references :{
                model : 'provincias',
                key : 'id'
            },
            allowNull : false
        },
        idDistrito : {
            type : Sequelize.INTEGER,
            references :{
                model : 'distritos',
                key : 'id'
            },
            allowNull : false
        },
        idCentroPoblado : {
            type : Sequelize.INTEGER,
            references :{
                model : 'centros_poblados',
                key : 'id'
            },
            allowNull : false
        }*/
    }
);
module.exports = OficinaRegistral;