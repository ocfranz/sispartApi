'use strict';
const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes)=>{
    return sequelize.define(
        'actas_nacimientos',
        {
            id :{primaryKey : true, type : Sequelize.INTEGER, autoIncrement : true},
            numeroActa : { type : Sequelize.STRING(10), allowNull : false, },
            observacion : { type : Sequelize.STRING(225) },
            createdAt:{
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
                allowNull: false
            },
            updatedAt:{
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
                allowNull: false
            }
        }
    );
}
