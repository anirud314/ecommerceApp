const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    // define columns
    id: { // id
      type: DataTypes.INTEGER, // integer dataType
      primaryKey: true, // primary key used to link data
      autoIncrement: true, // will autoincrement each time to have a unique id
      allowNull: false // mandatory field
    },
    categoryName: {
      type: DataTypes.STRING, // string datatype
      allowNull: false, // mandatory field
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
