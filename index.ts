// import sequelizeSetup from "./config/sequelize";
import express from "express";
import routeSetup from "./routes";

// let sequelize = await sequelizeSetup();

const port = 4000;

const app = express();
app.use(express.json());

app.get("/", (_, res) => {
  res.json("PING");
});

routeSetup(app);

app.listen(port, () => console.log(`Listening to PORT: ${port}`));

export { app };
