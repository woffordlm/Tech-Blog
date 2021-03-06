const router = require("express").Router();
const { Comment } = require("../../models");

// create comment
router.post('/', (req, res) => {
    // check the session
    if (req.session) {
      Comment.create({
        comment_text: req.body.comment_text,
        user_id: req.session.user_id,
        post_id: req.body.post_id
        
      })
        .then(dbCommentData => res.json(dbCommentData))
        .catch(err => {
          console.log(err);
          res.status(400).json(err);
        });
    }
  });
// delete comment
router.delete("/:id", (req,res)=> {
    Comment.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbCommentData => {
        if (!dbCommentData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
        res.json(dbCommentData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
// fine comment by id
router.get("/", (req,res)=> {
    Comment.findAll({})
    .then(commentData => {
        res.json(commentData)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})
// find all comments
router.get("/:id", (req,res)=> {
    Comment.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(commentData => {
        res.json(commentData)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})
module.exports = router