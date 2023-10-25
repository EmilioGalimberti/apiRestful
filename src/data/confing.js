import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("alumnosDB.sqlite","","",{
    dialect: "sqlite",
    host: "src/data/alumnosDB.sqlite"
})