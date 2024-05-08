const express = require('express');
const router = express.Router();
const PostsControllers = require('../controllers/post');

router.post('/', PostsControllers.createPost);
router.delete('/:id', PostsControllers.deletePost);
router.patch('/:id', PostsControllers.editPost);

module.exports = router;
