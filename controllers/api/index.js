const router = require('express').Router();
// const homeRoutes = require('./home-routes.js');
const userRoutes = require ('./user-routes')

// router.use('/', homeRoutes);
router.use('/users', userRoutes);


router.use((req, res) => {
    res.status(400).end();
  });

module.exports = router;

