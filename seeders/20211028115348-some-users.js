"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("users", [
      {
        fullName: "Johann",
        email: "JK@dotemail",

        password: "1234",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fullName: "Neto",
        email: "NEETO@dotemail",

        password: "5678",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fullName: "mother",
        email: "Mother@hotemail",

        password: "9101",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fullName: "father",
        email: "father@hotemail",

        password: "7683",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
