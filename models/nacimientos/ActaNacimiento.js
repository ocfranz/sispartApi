const Sequelize = require('sequelize');
const connection = require('../../db/connection');

const Declarante = connection.define(
    'actas_nacimientos',
    {
        id :{primaryKey : true, type : Sequelize.INTEGER, autoIncrement : true},
        numeroActa : { type : Sequelize.STRING(10), allowNull : false, },
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