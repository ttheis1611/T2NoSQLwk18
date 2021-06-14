const router = requires('express').Router();

const {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser
  } = require('../../controllers/user-controller');
  
  // /api/Users
  router
    .route('/')
    .get(getAllUser)
    .post(createUser);
  
  // /api/Users/:id
  router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);
  
  module.exports = router;