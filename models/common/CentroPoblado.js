'use strict';
const Sequelize = require('sequelize');
/**
 * CentroPoblado model
 * @param {INTEGER} id : CentroPoblado id 
 * @param {STRING} ubigeo : CentroPoblado ubigeo
 * @param {STRING} nombre : CentroPoblado name
 * 
 */
module.exports = (sequelize, DataTypes) =>{
    return sequelize.define(
        'centros_poblados',
        {
            id :{
                primaryKey : true,
                type : DataTypes.INTEGER,
                autoIncrement : true,  
            },
            ubigeo : {
                type : DataTypes.STRING(10),
                allowNull : false,
                unique : true
            },
            nombre : {
                type : DataTypes.STRING(100),
                allowNull : false,
            },
            createdAt:{
                type: 'TIMESTAMP',
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
                allowNull: false
            },
            updatedAt:{
                type: DataTypes.DATE,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
                allowNull: false
            }
        }
    );
}
