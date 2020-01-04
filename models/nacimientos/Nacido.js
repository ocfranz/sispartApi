const Sequelize = require('sequelize');
const connection = require('../../db/connection');

const Nacido = connection.define(
    'nacidos',
    {
        id :{primaryKey : true, type : Sequelize.INTEGER, autoIncrement : true },
        nombres : {type : Sequelize.STRING(45),allowNull : false,},
        apellidoPaterno : {type : Sequelize.STRING(30),allowNull : false,},
        apellidoMaterno : {type : Sequelize.STRING(30),allowNull : false, },
        sexo : {type : Sequelize.ENUM('FEMENINO', 'MASCULINO'), allowNull : false},
        fechaNacimiento : {type : Sequelize.DATEONLY, allowNull : true},
        horaNacimiento : {type : Sequelize.TIME, allowNull : true},
        fechaRegistro : { type : Sequelize.DATEONLY, allowNull : false},
        /*
        idLugarOcurrencia : {
            type : Sequelize.INTEGER,
            references :{
                model : 'lugares_ocurrencias',
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
        idProvincia : {
            type : Sequelize.INTEGER,
            references :{
                model : 'provincias',
                key : 'id'
            },
            allowNull : false
        },
        idDistrito : {
            type : Sequelize.INTEGER,
            references :{
                model : 'distritos',
                key : 'id'
            },
            allowNull : false
        },
        idCentroPoblado : {
            type : Sequelize.INTEGER,
            references :{
                model : 'centros_poblados',
                key : 'id'
            },
            allowNull : false
        },
        
        idPadre : {
            type : Sequelize.INTEGER,
            references :{
                model : 'padres',
                key : 'id'
            },
            onDelete: 'CASCADE',
            allowNull : false
        },
        idMadre : {
            type : Sequelize.INTEGER,
            references :{
                model : 'madres',
                key : 'id'
            },
            onDelete: 'CASCADE',
            allowNull : false
        },
        */
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