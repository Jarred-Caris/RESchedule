const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Task extends Model {}

Task.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		title: {
			type: DataTypes.STRING,
			allowNull: false,
		},

		time: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: DataTypes.NOW,
		},
		length: {
			type: DataTypes.FLOAT,
			allowNull: false,
		},
		manager_id: {
			type: DataTypes.INTEGER,
			references: {
				model: 'manager',
				key: 'id',
			},
		},
		employee_id: {
			type: DataTypes.INTEGER,
			references: {
				model: 'employee',
				key: 'id',
			},
		},
	},
	{
		sequelize,
		timestamps: false,
		freezeTableName: true,
		underscored: true,
		modelName: 'task',
	}
);

module.exports = Task;