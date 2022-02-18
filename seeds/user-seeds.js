const sequelize = require('../config/connection');
const { User } = require('../models')

const userdata = [
  {
    username: 'woffordlm',
    email: 'luke@gmail.com',
    password: 'password123'
  },
  {
    username: 'kmill',
    email: 'kana@gmail.com',
    password: 'password123'
  },
  {
    username: 'williesmith',
    email: 'will@gmail.com',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;