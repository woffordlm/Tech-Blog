const router = require('express').Router();
// const homeRoutes = require('../home-routes/home-routes.js');
const userRoutes = require ('./user-routes');
const postRoutes = require ("./post-routes");
const commentRoutes = require ("./comment-routes")

// router.use('/home', homeRoutes);
router.use('/users', userRoutes);
router.use('/post', postRoutes)
router.use('/comment', commentRoutes)


router.use((req, res) => {
    res.status(400).end();
  });

module.exports = router;

