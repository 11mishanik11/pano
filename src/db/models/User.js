import {sequelize} from "../connect.js";
import {DataTypes} from "sequelize";
import {Project} from "./Project.js";

export const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
})

User.hasMany(Project)
