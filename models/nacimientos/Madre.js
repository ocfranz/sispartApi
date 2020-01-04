const Sequelize = require('sequelize');
const connection = require('../../db/connection');

const Madre = connection.define(
    'madres',
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
        direccion  : {type : Sequelize.STRING(70)},
        idNacionalidad : {
            type : Sequelize.INTEGER,
            references :{
                model : 'nacionalidades',
                key : 'id'
            },
            allowNull : false
        },
        idDepartamento : {
            type : Sequelize.INTEGER,
            references :{
                model : 'departamentos',
                key : 'id'
            },
            allowNull : false
        },
        idProvincia: {
            type : Sequelize.INTEGER,
            references :{
                model : 'provincias',
                key : 'id'
            },
            allowNull : false
        },
        idDistrito: {
            type : Sequelize.INTEGER,
            references :{
                model : 'distritos',
                key : 'id'
            },
            allowNull : false
        },
        idCentroPoblado: {
            type : Sequelize.INTEGER,
            references :{
                model : 'centros_poblados',
                key : 'id'
            },
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
);


module.exports = Madre;