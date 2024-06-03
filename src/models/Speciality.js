import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Speciality = sequelize.define(
    "specialitys",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
        },
    },
    {
        timestamps: false,
    }
);

