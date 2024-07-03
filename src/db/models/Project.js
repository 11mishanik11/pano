import {sequelize} from "../connect.js";
import {DataTypes} from "sequelize";

export const Project = sequelize.define('project', {
	id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
	name: {type: DataTypes.STRING, defaultValue: 'no name'},
})
