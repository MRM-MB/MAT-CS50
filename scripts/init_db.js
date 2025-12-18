const mysql = require('mysql2/promise');
require('dotenv').config();

async function initialize() {
    const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env;
    try {
        const connection = await mysql.createConnection({ host: DB_HOST, user: DB_USER, password: DB_PASSWORD });
        await connection.query(`CREATE DATABASE IF NOT EXISTS \`${DB_NAME}\`;`);
        console.log(`Database ${DB_NAME} created or already exists.`);
        await connection.end();
    } catch (error) {
        console.error('Error creating database:', error);
    }
}

initialize();