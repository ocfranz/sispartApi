const env = require('dotenv');
env.config();

const DATABASE_HOST = process.env.DATABASE_HOST;
const DATABASE_NAME = process.env.DATABASE_NAME;
const DATABASE_USER = process.env.DATABASE_USER;
const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD;
const NODE_ENV =  process.env.NODE_ENV;
const config = {
    dev :  {
        db :{
            host : DATABASE_HOST,
            database : DATABASE_NAME,
            username : DATABASE_USER,
            password : DATABASE_PASSWORD,
        }
    },
    test : {},
    prod : {}
};

module.exports = config[NODE_ENV];