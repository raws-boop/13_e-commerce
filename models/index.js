
MikeAdu
/
13.5-E-Commerce-Back-End
Public
Code
Issues
Pull requests
Actions
Projects
Wiki
More
13.5-E-Commerce-Back-End/models/index.js /
@MikeAdu
MikeAdu added sequlize to index.js
 History
 1 contributor
28 lines (27 sloc)  668 Bytes
// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category,{
  foreignKey: "categoryId"
});
// Categories have many Products
Category.hasMany(Product, {
foreignKey: "productId"
});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
through:ProductTag, foreignKey: "productId"
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
through:ProductTag, foreignKey: "tagId"
});
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};