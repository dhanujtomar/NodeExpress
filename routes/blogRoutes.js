const express = require('express');
const {blogIndex, blogShow, blogHomeRedirect, blogDeletePost} = require('../controllers/blogController')


const router = express.Router();


router.get('/', blogIndex);

router.get('/create', (req, res)=>{
    res.render('create', {title: 'Create Blog'});
});

router.get('/:id', blogShow)
router.post('/', blogHomeRedirect);
router.delete('/:id', blogDeletePost)

module.exports = router;