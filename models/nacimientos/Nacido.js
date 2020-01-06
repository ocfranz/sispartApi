'use strict';
const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes)=>{
    return sequelize.define(
        'nacidos',
        {
            id :{primaryKey : true, type : Sequelize.INTEGER, autoIncrement : true },
            nombres : {type : Sequelize.STRING(45),allowNull : false,},
            apellido_paterno : {type : Sequelize.STRING(30),allowNull : false,},
            apellido_materno : {type : Sequelize.STRING(30),allowNull : false, },
            sexo : {type : Sequelize.ENUM('FEMENINO', 'MASCULINO'), allowNull : false},
            fechaNacimiento : {type : Sequelize.DATEONLY, allowNull : true},
            horaNacimiento : {type : Sequelize.TIME, allowNull : true},
            fechaRegistro : { type : Sequelize.DATEONLY, allowNull : false},
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