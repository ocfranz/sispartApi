const dotenv = require('dotenv');
const Sequelize = require('sequelize');

dotenv.config();
const connection = new Sequelize(
    process.env.DATABASE_NAME,
    process.env.DATABASE_USER,
    process.env.DATABASE_PASSWORD,
    {
        host : process.env.DATABASE_HOST,
        dialect : 'mysql',
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
         },
    }
)
connection.authenticate()
  .then(() => {
    console.log('Connected'); 
  })
  .catch((err) => {
    console.error('Erro:', err); 
  });

module.exports = connection;

