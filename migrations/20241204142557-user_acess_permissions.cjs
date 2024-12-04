"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(async (transaction) => {
      return Promise.all([
        queryInterface.addColumn(
          "users_access_controls",
          "loggedIn",
          {
            type: Sequelize.DataTypes.BOOLEAN,
            defaultValue: false,
          },
          {
            transaction,
          }
        ),
        queryInterface.addColumn(
          "users_access_controls",
          "permissions",
          {
            type: Sequelize.DataTypes.JSON,
            defaultValue: [],
          },
          {
            transaction,
          }
        ),
      ]);
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(async (transaction) => {
      return Promise.all([
        queryInterface.removeColumn("users_access_controls", "loggedIn", null, {
          transaction,
        }),
        queryInterface.removeColumn(
          "users_access_controls",
          "permissions",
          null,
          { transaction }
        ),
      ]);
    });
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
