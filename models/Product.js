// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER, // data type is integer
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    productName: {
      type: DataTypes.STRING, // data type is a string
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),// decimal only to the 100th place
      allowNull: false,
      validate: { // validates if value is a decimal
        isDecimal: true,
      },
    },
    stock: {
      type: DataTypes.INTEGER,
      defaultValue: 10, // default value is 10
      allowNull: false,
      validate: { // validates if value is a numerical val
        isNumeric: true,
      },
    },
    categoryID: {
      type: DataTypes.INTEGER,
      references: { // category id is based off of category table's id
        model: 'category',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
