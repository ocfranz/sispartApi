const Sequelize = require('sequelize');
const connection = require('../../db/connection');

/**
 * CentroPoblado model
 * @param {INTEGER} id : CentroPoblado id 
 * @param {STRING} ubigeo : CentroPoblado ubigeo
 * @param {STRING} nombre : Name
 * 
 */

const CentroPoblado = connection.define(
    'centros_poblados',
    {
        id :{
            primaryKey : true,
            type : Sequelize.INTEGER,
            autoIncrement : true,  
        },
        ubigeo : {
            type : Sequelize.STRING(10),
            allowNull : false,
            unique : true
        },
        nombre : {
            type : Sequelize.STRING(100),
            allowNull : false,
        },
        createdAt :Sequelize.DATE,
        updatedAt : Sequelize.DATE
    }
)


module.exports = CentroPoblado;