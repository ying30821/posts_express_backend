const Post = require('../model/post');
const { handleSuccess } = require('../service/handler');

const posts = {
  async getPosts(req, res) {
    const posts = await Post.find();
    handleSuccess(res, posts);
  },
  async deletePosts(req, res) {
    await Post.deleteMany();
    const posts = await Post.find();
    handleSuccess(res, posts);
  },
};

module.exports = posts;
