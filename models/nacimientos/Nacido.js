const Sequelize = require('sequelize');
const connection = require('../../db/connection');

const Nacido = connection.define(
    'nacidos',
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
        sexo : {
            type : Sequelize.ENUM('FEMENINO', 'MASCULINO'),
        },
        fechaNacimiento : {
            type : Sequelize.DATEONLY,
            allowNull : true
        },
        horaNacimiento : {
            type : Sequelize.TIME,
            allowNull : true
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


module.exports = Nacido;