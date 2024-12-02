"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable("organization_invites", {
      uid: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      createdAt: {
        type: Sequelize.DataTypes.DATE,
        defaultValue: new Date(),
      },
      updatedAt: {
        type: Sequelize.DataTypes.DATE,
        defaultValue: new Date(),
      },
      organizationName: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      organizationOwnerEmail: {
        type: Sequelize.DataTypes.STRING,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable("organization_invites");
  },
};
