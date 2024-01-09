const Blog = require('../models/blog');

const blogIndex = (req,res)=>{
    Blog.find().sort({createdAt: -1})
    .then((result)=>{
        res.render('index', {title: 'All Blogs', blogs: result});
    })
    .catch(err=>{
        res.render('404', {title: '404'});
    })
};


const blogShow = (req, res)=>{
    const id = req.params.id;
    console.log(id);
    
    Blog.findById(id)
    .then((result)=>{
        res.render('details', {blog: result, title: 'Blog Details'});
    })
    .catch(err=>{
        res.render('404', {title: '404'});
    })
}

const blogHomeRedirect = (req,res)=>{
    const blog = new Blog(req.body);

    blog.save()
    .then((result)=>{
        res.redirect('/');
    })
    .catch(err => {console.log(err);});
}

const blogDeletePost = (req,res)=>{
    const id = req.params.id;

    Blog.findByIdAndDelete(id)
    .then(result => {
        res.json({redirect: '/blogs'});
    })
    .catch(err => console.log(err));
}

module.exports = {
    blogIndex,
    blogShow,
    blogHomeRedirect,
    blogDeletePost
}