const Sequelize = require('sequelize');
const connection = require('../../db/connection');

/**
 * Distrito model
 * @param {INTEGER} id : Distrito id 
 * @param {STRING} ubigeo : Distrito ubigeo
 * @param {STRING} distrito : Distrito name
 * 
 */

const Distrito = connection.define(
    'distritos',
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
        distrito  : {
            type : Sequelize.STRING(100),
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


module.exports = Distrito;