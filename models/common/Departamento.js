'use strict';
const Sequelize = require('sequelize');
/**
 * Departamenot model
 * @param {INTEGER} id : Departament id 
 * @param {STRING} ubigeo : Departamento ubigeo
 * @param {STRING} departamento : Name
 * 
 */
module.exports = (sequelize, DataTypes) =>{
    return sequelize.define(
        'departamentos',
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
            departamento : {
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
        },
        {
            truncate: { cascade: true }
        }
    );
}


