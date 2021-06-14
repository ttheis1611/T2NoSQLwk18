const router = require('express').Router();
const {
  addThought,
  removeThought,
  addReaction,
  removeReaction
} = require('../../controllers/Thought-controller');

// /api/Thoughts/<pizzaId>
router.route('/:userId').post(addThought);

// /api/Thoughts/<userId>/<thoughtId>
router
  .route('/:userId/:thoughtId')
  .put(addReaction)
  .delete(removeThought);

// /api/Thoughts/<userId>/<ThoughtId>/<replyId>
router.route('/:userId/:thoughtId/:reactionId').delete(removeReaction);

module.exports = router;