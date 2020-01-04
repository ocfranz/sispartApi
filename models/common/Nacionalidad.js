const Sequelize = require('sequelize');
const connection = require('../../db/connection');

const Padre = require('../nacimientos/Padre');
/**
 * Catalog Database table
 * Nacionalidad model
 * @param {INTEGER} id : Distrito id 
 * @param {STRING} nacionalidad : Distrito ubigeo
 * 
 */

const Nacionalidad = connection.define(
    'nacionalidades',
    {
        id :{
            primaryKey : true,
            type : Sequelize.INTEGER,
            autoIncrement : true,  
        },
        nacionalidad  : {
            type : Sequelize.STRING(50),
            allowNull : false,
        },
        createdAt:{
            type: 'TIMESTAMP',
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updatedAt:{
            type: Sequelize.DATE,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    }
)

module.exports = Nacionalidad;