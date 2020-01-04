const Sequelize = require('sequelize');
const connection = require('../../db/connection');

const LugarOcurrencia = require('../common/LugarOcurrencia');
const Departamento = require('../common/Departamento');
const Provincia = require('../common/Provincia');
const Distrito = require('../common/Distritos');
const CentroPoblado = require('../common/CentroPoblado');
const Padre = require('../nacimientos/Padre');
const Madre = require('../nacimientos/Madre');
const Declarante = require('../nacimientos/Declarante');

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
            allowNull : false
        },
        idMadre : {
            type : Sequelize.INTEGER,
            references :{
                model : 'madres',
                key : 'id'
            },
            allowNull : false
        },
        idPrimerDeclarante : {
            type : Sequelize.INTEGER,
            references :{
                model : 'declarantes',
                key : 'id'
            },
            allowNull : true
        },
        idSegundoDeclarante : {
            type : Sequelize.INTEGER,
            references :{
                model : 'declarantes',
                key : 'id'
            },
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