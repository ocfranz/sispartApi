'use strict';
const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes)=>{
    return sequelize.define(
        'declarantes',
        {
            id :{
                primaryKey : true,
                type : Sequelize.INTEGER,
                autoIncrement : true,  
            },
            nombres : {
                type : Sequelize.STRING(45),
                allowNull : false,
            },
            apellido_paterno : {
                type : Sequelize.STRING(30),
                allowNull : false,
            },
            apellido_materno : {
                type : Sequelize.STRING(30),
                allowNull : false,
            },
            tipo_identidad : {
                type : Sequelize.ENUM('DNI', 'LIBRETA MILITAR', 'CARNET DE EXTRANJERÍA'),
                allowNull : false,
            },
            numero_identidad : {
                type : Sequelize.STRING(30),
                allowNull : false,
            },
            vinculo : {
                type : Sequelize.STRING(30),
                allowNull : false,
            },
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