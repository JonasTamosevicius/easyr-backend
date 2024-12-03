import { Sequelize } from "sequelize-typescript";
import path from "path";
import { fileURLToPath } from "url";
import modelsSetup from "@model/index";

export const sequelize = new Sequelize({
  database: "easyr",
  dialect: "mariadb",
  username: "root",
  password: "easyrlocal",
  port: 3307,
  define: {
    raw: false,
  },
});

(async () => {
  modelsSetup();
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    console.log(sequelize.models);
  } catch (err) {
    console.error("Unable to connect to the database:", err);
  }
})();
