const Sequelize = require('sequelize');
const connection = require('../../db/connection');

const Registrador = connection.define(
    'registradores',
    {
        id :{primaryKey : true, type : Sequelize.INTEGER, autoIncrement : true },
        nombres : {type : Sequelize.STRING(45),allowNull : false,},
        apellidoPaterno : {type : Sequelize.STRING(30),allowNull : false,},
        apellidoMaterno : {type : Sequelize.STRING(30),allowNull : false, },
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

module.exports = Registrador;