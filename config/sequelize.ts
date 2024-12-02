import { Sequelize } from "sequelize";

export let sequelize: Sequelize = null;

export const setupSequelize = async () => {
  const sequelize = new Sequelize("easyr", "root", "easyrlocal", {
    host: "localhost",
    port: 3307,
    dialect: "mariadb",
  });

  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (err) {
    console.error("Unable to connect to the database:", err);
  }

  return sequelize;
};

sequelize ||= await setupSequelize();
