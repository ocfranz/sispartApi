'use strict';
const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes)=>{
    return sequelize.define(
        'registradores',
        {
            id :{primaryKey : true, type : Sequelize.INTEGER, autoIncrement : true },
            nombres : {type : Sequelize.STRING(45),allowNull : false,},
            apellido_paterno : {type : Sequelize.STRING(30),allowNull : false,},
            apellido_materno : {type : Sequelize.STRING(30),allowNull : false, },
            dni : {type : Sequelize.STRING(8),allowNull : false, unique : true},
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
