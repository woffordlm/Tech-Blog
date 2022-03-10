// import all models
const Post = require("./posts");
const User = require("./users");
const Comment = require("./comments");
// const Comment = require("./comments");

// create associations
User.hasMany(Post, {
  foreignKey: "user_id",
});

Post.belongsTo(User, {
  foreignKey: "user_id",
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
});

Comment.belongsTo(Post, {
  foreignKey: "post_id",
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
});

User.hasMany(Comment, {
  foreignKey: "user_id",
});

Post.hasMany(Comment, {
  foreignKey: "post_id",
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
});
module.exports = { User, Post, Comment};
