const Sequelize = require('sequelize');
const connection = require('../../db/connection');
const Declarante = connection.define(
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
        apellidoPaterno : {
            type : Sequelize.STRING(30),
            allowNull : false,
        },
        apellidoMaterno : {
            type : Sequelize.STRING(30),
            allowNull : false,
        },
        tipoIdentidad : {
            type : Sequelize.ENUM('DNI', 'LIBRETA MILITAR', 'CARNET DE EXTRANJERÍA'),
            allowNull : false,
        },
        numeroIdentidad : {
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
module.exports = Declarante;