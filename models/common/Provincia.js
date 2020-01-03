const Sequelize = require('sequelize');
const connection = require('../../db/connection');

/**
 * Provincia model
 * @param {INTEGER} id : Provincia id 
 * @param {STRING} ubigeo : Provincia ubigeo
 * @param {STRING} provincia : Pronvinca name
 * 
 */

const Provincia = connection.define(
    'provincias',
    {
        id :{
            primaryKey : true,
            type : Sequelize.INTEGER,
            autoIncrement : true,  
        },
        ubigeo : {
            type : Sequelize.STRING(10),
            allowNull : false,
            unique : true
        },
        provincia : {
            type : Sequelize.STRING(100),
            allowNull : false,
        },
        createdAt :Sequelize.DATE,
        updatedAt : Sequelize.DATE
    }
)


module.exports = Provincia;