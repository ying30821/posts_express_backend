const express = require('express');
const router = express.Router();
const PostsControllers = require('../controllers/posts');

router.get('/', PostsControllers.getPosts);
router.delete('/', PostsControllers.deletePosts);

module.exports = router;
