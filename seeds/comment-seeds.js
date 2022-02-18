const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'I love tomatoes',
    user_id: 1,
    post_id: 1
  },
  {
    comment_text: 'I love peppers',
    user_id: 2,
    post_id: 2
  },
  {
    comment_text: 'I love lettuce',
    user_id: 3,
    post_id: 3
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments