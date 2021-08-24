const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    productID: {
      type: DataTypes.INTEGER,
      references: { // Value here is based off of the product tables id value
        model: 'product',
        key: 'id'
      },
    },
    tagID: {
      type: DataTypes.INTEGER,
      references: { // value here is based off of the tag tables id value
        model: 'tag',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag', //Right Here???
  }
);

module.exports = ProductTag;
