const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.DB_DIALECT === 'sqlite' || process.env.SQLITE_STORAGE) {
    sequelize = new Sequelize({
        dialect: 'sqlite',
        storage: process.env.SQLITE_STORAGE || 'database.sqlite',
        logging: false
    });
} else {
    sequelize = new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASSWORD,
        {
            host: process.env.DB_HOST,
            dialect: process.env.DB_DIALECT || 'mysql'
        }
    );
}

module.exports = sequelize;