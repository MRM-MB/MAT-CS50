const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const File = sequelize.define('File', {
    path: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    originalName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: true
    },
    downloadCount: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    }
});

module.exports = File;