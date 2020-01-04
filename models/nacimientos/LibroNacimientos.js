const Sequelize = require('sequelize');
const connection = require('../../db/connection');

const LibroNacimiento = connection.define(
    'libros_nacimientos',
    {
        id :{primaryKey : true, type : Sequelize.INTEGER, autoIncrement : true},
        numeroLibro : { type : Sequelize.INTEGER, allowNull : false, unique : true},
        fechaApertura : { type : Sequelize.DATEONLY, allowNull : true},
        fechaCierre : { type : Sequelize.DATEONLY, allowNull : true},
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
module.exports = LibroNacimiento;