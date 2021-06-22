const router = require('express').Router();

const {
  getAllThoughts,
  getThoughtById,
  addThought,
  updateThought,
  removeThought,
  addReaction,
  removeReaction
} = require('../../controllers/thought-controller');


router
  .route('/')
  .get(getAllThoughts)
  .post(addThought);


// /api/Thoughts/<userId>
router
  .route('/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(removeThought);

  // router
  //   .route('/:userId/:thoughtId')
  //   .delete(removeThought);

// /api/thoughts/reactions
router
  .route('/:thoughtId/reactions')
  .post(addReaction);
    

//api/Thoughts/<userId>/<ThoughtId>/<reactionId>
 router
   .route('/:thoughtId/reactions/:reactionId')
   .delete(removeReaction);

module.exports = router;