const router = require("express").Router();
const { User } = require("../../models");

router.post('/', (req, res) => {
  // expects {username: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234'}
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  })
    .then(dbUserData => {
      req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.username = dbUserData.username;
        req.session.loggedIn = true;
  
        res.json(dbUserData);
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/login', (req, res) => {
  // expects {email: 'lernantino@gmail.com', password: 'password1234'}
  User.findOne({
    where: {
      email: req.body.email
    }
  }).then(dbUserData => {
    if (!dbUserData) {
      res.status(400).json({ message: 'No user with that email address!' });
      return;
    }

    const validPassword = dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect password!' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.username = dbUserData.username;
      req.session.loggedIn = true;
  
      res.json({ user: dbUserData, message: 'You are now logged in!' });
    });
  });
});

// fix this route
router.put('/login', (req, res) => {

  User.findOne({
    password: req.body.password,
    where: {
      id: req.params.id
    }
  }).then(dbUserData => {
    if (!dbUserData){
      res.status(400).json({message: 'No user with that email address!'});
      return
    }
    res.json({ user: dbUserData});

    // Verify User
  })

})
router.get('/', (req, res) => {

  User.findAll({
    attributes: { exclude: ['password'] }
  })
  .then(dbUserData => {
    if (!dbUserData){
      res.status(400).json({message: 'No user with that email address!'});
      return
    }
    res.json({ user: dbUserData});

    // Verify User
  })

})

module.exports = router