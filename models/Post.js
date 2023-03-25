const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = require("./connection.js");

class Post extends Model {}

Post.init(
  {
    title: DataTypes.STRING,
    body: DataTypes.STRING,
  },
  {
    sequelize,
  }
);

module.exports = Post;
