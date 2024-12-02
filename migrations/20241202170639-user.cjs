"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(async (t) => {
      return Promise.all([
        queryInterface.createTable(
          "users",
          {
            id: {
              type: Sequelize.DataTypes.BIGINT,
              allowNull: false,
              primaryKey: true,
              autoIncrement: true,
            },
            createdAt: {
              type: Sequelize.DataTypes.DATE,
              defaultValue: new Date(),
            },
            updatedAt: {
              type: Sequelize.DataTypes.DATE,
              defaultValue: new Date(),
            },
            email: {
              type: Sequelize.DataTypes.STRING,
              required: true,
            },
            passwordHash: {
              type: Sequelize.DataTypes.STRING,
              required: true,
            },
            phoneNumber: {
              type: Sequelize.DataTypes.STRING,
            },
          },
          {
            transaction: t,
          }
        ),
        queryInterface.createTable(
          "users_access_controls",
          {
            userId: {
              type: Sequelize.DataTypes.BIGINT,
              allowNull: false,
              primaryKey: true,
              references: {
                key: "id",
                model: {
                  tableName: "users",
                },
              },
            },
            organizationId: {
              type: Sequelize.DataTypes.BIGINT,
              allowNull: false,
              primaryKey: true,
              references: {
                key: "id",
                model: {
                  tableName: "organizations",
                },
              },
            },
          },
          {
            transaction: t,
          }
        ),
      ]);
    });
  },

  async down(queryInterface, Sequelize) {
    queryInterface.dropTable("users_access_controls");
    queryInterface.dropTable("users");
  },
};
