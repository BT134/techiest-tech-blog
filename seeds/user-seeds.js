const { User } = require('../models');

const userData = [
  {
    username: "Zoe",
    email: "Zoe@gmail.com",
    password: "password1234"
  },
  {
    username: "George",
    email: "George@gmail.com",
    password: "password1234"
  },
  {
    username: "Shaun",
    email: "Shaun@gmail.com",
    password: "password1234"
  },
  {
    username: "Michael",
    email: "Michael@gmail.com",
    password: "password1234"
  },
  {
    username: "John",
    email: "John@gmail.com",
    password: "123456789"
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;