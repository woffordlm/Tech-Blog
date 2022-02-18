const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize("tech_blog", "root", "password", {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;
