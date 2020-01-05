'use strict';
const Sequelize = require('sequelize');

/**
 * Catalog Database table
 * Lugar Ocurrencia model
 * @param {INTEGER} id : Lugar Ocurrencia id 
 * @param {STRING} tipoLugar : Lugar Ocurrencia type of place
 * @param {STRING} nombre : Lugar Ocurrencia name of place
 * 
 */
module.exports = (sequelize, DataTypes) =>{
    return sequelize.define(
        'lugares_ocurrencias',
        {
            id :{
                primaryKey : true,
                type : Sequelize.INTEGER,
                autoIncrement : true,  
            },
            tipoLugar :{
                type : Sequelize.STRING(100),
            },
            nombre  : {
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
}
