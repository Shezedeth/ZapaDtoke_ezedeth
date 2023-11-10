"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Admin",
          surname: "dtoke",
          email: "admin@gmail.com",
          password:
            "$2a$10$qJuExDMLCE/91ynBq8ToBu9upl0FEmozvSJGcrHoDFiEQiLMs30hm",
            // Abc123+
          roleId: 1,
          birthday: '2003-03-27 00:00:00',
          createdAt : new Date,
          updatedAt : new Date,
        },
        {
          name: "Eze",
          surname: "Gomez",
          email: "eze@gmail.com",
          password:
            "$2a$10$qJuExDMLCE/91ynBq8ToBu9upl0FEmozvSJGcrHoDFiEQiLMs30hm",
          roleId: 1,
          birthday: '2001-12-08 00:00:00',
          createdAt : new Date,
          updatedAt : new Date,
        },
        {
          name: "User",
          surname: "dtoke",
          email: "user@gmail.com",
          password:
            "$2a$10$qJuExDMLCE/91ynBq8ToBu9upl0FEmozvSJGcrHoDFiEQiLMs30hm",
          roleId: 2,
          birthday: '1991-06-21 00:00:00',
          createdAt : new Date,
          updatedAt : new Date,
        },
        {
          name: "Metalero",
          surname: "Pesado",
          email: "Metal@gmail.com",
          password:
            "$2a$10$qJuExDMLCE/91ynBq8ToBu9upl0FEmozvSJGcrHoDFiEQiLMs30hm",
          roleId: 1,
          birthday: '1992-06-17 00:00:00',
          createdAt : new Date,
          updatedAt : new Date,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
