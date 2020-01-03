const Sequelize = require('sequelize');
const connection = require('../../db/connection');

/**
 * Departamenot model
 * @param {INTEGER} id : Departament id 
 * @param {STRING} ubigeo : Departamento ubigeo
 * @param {STRING} departamento : Name
 * 
 */

const Departamento = connection.define(
    'departamento',
    {
        id :{
            primaryKey : true,
            type : Sequelize.INTEGER,
            autoIncrement : true,  
        },
        ubigeo : {
            type : Sequelize.STRING(10),
            allowNull : false,
    
        },
        departamento : {
            type : Sequelize.STRING(100),
            allowNull : false,
        },
        createdAt :Sequelize.DATE,
        updatedAt : Sequelize.DATE
    }
)


module.exports = Departamento;