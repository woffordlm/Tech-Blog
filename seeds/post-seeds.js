const { Post } = require('../models');

const postdata = [
  {
    title: 'How to grow tomatoes',
    post_url: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
    user_id: 1
  },
  {
    title: 'How to grow peppers',
    post_url: 'https://nasa.gov/donec.json',
    user_id: 2
  },
  {
    title: 'How to grow lettuce',
    post_url: 'https://europa.eu/parturient/montes/nascetur/ridiculus/mus/etiam/vel.aspx',
    user_id: 3
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;