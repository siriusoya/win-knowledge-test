'use strict';
const fs = require('fs');
const { hashPassword } = require('../helpers/bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const data = JSON.parse(fs.readFileSync("./data/users.json", "utf-8"))
    .map(el => {
      el.createdAt = new Date();
      el.updatedAt = new Date();
      el.password = hashPassword(el.password)
      return el;
    })

    await queryInterface.bulkInsert('Users', data);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null);
  }
};
