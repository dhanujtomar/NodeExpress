const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const blogSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    snippet: {
        type: String,
        require: 1
    },
    body: {
        type: String,
        requier: true
    }
}, {timestamps:true});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;