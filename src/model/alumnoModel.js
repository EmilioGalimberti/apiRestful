import { DataTypes } from "sequelize";
import { sequelize } from "../data/confing.js";

export const Alumno = sequelize.define("Alumno",
{
id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    
},
nombre: {
    type: DataTypes.TEXT,
    allowNull: false,
    
},
edad: {
    type: DataTypes.INTEGER,
    allowNull: false,
    
}
},
{
    timestamps: false, // omita columnas de auditoría
    sequelize
})