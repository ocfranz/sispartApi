'use strict';
const Sequelize = require('sequelize');
/**
 * Provincia model
 * @param {INTEGER} id : Provincia id 
 * @param {STRING} ubigeo : Provincia ubigeo
 * @param {STRING} provincia : Pronvinca name
 * 
 */

module.exports = (sequelize, DataTypes)=>{
    return sequelize.define(
        'provincias',
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
            provincia : {
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
}
