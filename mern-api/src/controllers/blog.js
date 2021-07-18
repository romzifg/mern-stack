const {validationResult} = require('express-validator');
const BlogPost = require('../models/blog')
const fs = require('fs')
const path = require('path')

exports.createBlogPost = (req, res, next) => {
    const error = validationResult(req);

    if(!error.isEmpty()) {
        const err = new Error('Invalid Value');
        err.errorStatus = 400;
        err.data = error.array();
        throw err;
    }

    if(!req.file) {
        const err = new Error('Image Harus diupload');
        err.errorStatus = 422;
        err.data = error.array();
        throw err;
    }

    const title = req.body.title;
    const image = req.file.path;
    const body = req.body.body;


    const Posting = new BlogPost({
        title: title,
        body: body,
        image: image,
        author: {uid:1, name: 'Romzi'}
    })

    Posting.save()
    .then(result => {
        res.status(201).json({
            message: 'Blog Created',
            data: result
        })
        next();
    })
    .catch(err => {
        console.log('err', err)
    })

}

exports.getAllPosts = (req, res, next) => {
    const currentPage = req.query.page || 1;
    const perPage = req.query.perPage || 5;
    let totalPosts;

    // Pagination
    BlogPost.find()
    .countDocuments()
    .then(count => {
        totalPosts = count
        return BlogPost.find()
        .skip((parseInt(currentPage) - 1) * parseInt(perPage))
        .limit(parseInt(perPage));
    })
    .then(result => {
        res.status(200).json({
            message: 'Data Find it',
            data: result, 
            total_data: totalPosts,
            per_page: parseInt(perPage),
            current_page: parseInt(currentPage),
        })
    })
    .catch(err => {
        next(err);
    })
}

exports.getPostId = (req, res, next) => {
    const postId = req.params.postId;
    BlogPost.findById(postId)
    .then(result => {
        if(!result) {
            const error = new Error('Post tidak ditemukan')
            error.errorStatus = 404;
            throw error;
        }
        res.status(200).json({
            message: 'Data ditemukan',
            data: result,
        })
    })
    .catch(err => {
        next(err);
    })
}

exports.updateBlogPost = (req, res, next) => {
    const error = validationResult(req);

    if(!error.isEmpty()) {
        const err = new Error('Invalid Value');
        err.errorStatus = 400;
        err.data = error.array();
        throw err;
    }

    if(!req.file) {
        const err = new Error('Image Harus diupload');
        err.errorStatus = 422;
        err.data = error.array();
        throw err;
    }

    const title = req.body.title;
    const image = req.file.path;
    const body = req.body.body;
    const postId = req.params.postId;

    BlogPost.findById(postId)
    .then(post => {
        if(!post) {
            const err = new Error('Post tidak ditemukan')
            err.errorStatus = 404;
            throw err;
        }
        post.title = title;
        post.body = body;
        post.image = image;

        return post.save();
    })
    .then(result => {
        res.status(200).json({
            message: 'Update Success',
            data: result,
        })
    })
    .catch(er => {
        next(err);
    })      
}

exports.deletePost = (req, res, next) => {
    const postId = req.params.postId;

    BlogPost.findById(postId)
    .then(post => {
        if(!post) {
            const err = new Error('Post tidak ditemukan')
            err.errorStatus = 404;
            throw err;
        }

        deleteImage(post.image);
        return BlogPost.findByIdAndRemove(postId);
    })
    .then(result => {
        res.status(200).json({
            message: 'Delete Success',
            data: result,
        })
    })
    .catch(err => {
        next(err);
    })
}

const deleteImage =(filePath) => {
    filePath = path.join(__dirname, '../..', filePath);
    fs.unlink(filePath, err => console.log(err))
}