const express = require('express');
const {body} = require('express-validator')
const router = express.Router();

const blogController = require('../controllers/blog')

router.post('/post', [
    body('title').isLength({min: 5}).withMessage('input title is not valid'), 
    body('body').isLength({min: 20}).withMessage('input body is not valid')],
    blogController.createBlogPost);

router.get('/posts', blogController.getAllPosts)
router.get('/post/:postId', blogController.getPostId);
router.put('/post/:postId', [
    body('title').isLength({min: 5}).withMessage('input title is not valid'), 
    body('body').isLength({min: 20}).withMessage('input body is not valid')],
    blogController.updateBlogPost)

router.delete('/post/:postId', blogController.deletePost)

module.exports = router;