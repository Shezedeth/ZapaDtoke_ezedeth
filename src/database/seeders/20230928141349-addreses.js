"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Addreses",
      [
        {
          address: "Zurdoña 666",
          city: "SAN MIGUEL",
          province: "Buenos Aires",
          userId:4,
          createdAt : new Date,
          updatedAt : new Date,
        },
        {
          address: "Zurdasia 999",
          city: "SAN MIGUEL",
          province: "Buenos Aires",
          userId:1,
          createdAt : new Date,
          updatedAt : new Date,
        },
        {
          address: "Zurdocity 333",
          city: "SAN MIGUEL",
          province: "Buenos Aires",
          userId:2,
          createdAt : new Date,
          updatedAt : new Date,
        },
        {
          address: "Zurdoland 123",
          city: "SAN MIGUEL",
          province: "Buenos Aires",
          userId:3,
          createdAt : new Date,
          updatedAt : new Date,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Addreses", null, {});
  },
};
