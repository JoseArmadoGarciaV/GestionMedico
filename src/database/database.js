import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
    'Medicsdb', 
    'postgres', 
    '5432', 
    {
    host: 'localhost',
    dialect: 'postgres',
});