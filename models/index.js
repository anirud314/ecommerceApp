// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'categoryID', // sets relationship/association link using category id
});
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'categoryID', // sets relationship/association link using category id
});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'productID', // sets relationship/association link using product id
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tagID', // sets relationship/association link using tagID
});
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
