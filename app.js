const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const blogRoutes = require('./routes/blogRoutes');

const dbURI = "mongodb+srv://PracProjectSecure-Random:Od4eSOR1nX3MT101@cluster0.dh5wlw2.mongodb.net/PracDB?retryWrites=true&w=majority";

//express app
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));

mongoose.connect(dbURI)
    .then((result)=> {
        app.listen(3000, 'localhost');
    })
    .catch(err => {console.log(err)});


app.use('/',blogRoutes);


app.get('/', (req,res)=>{
    //res.send("<p>html code</p>");
    //res.sendFile('./views/index.html', {root: __dirname});
    // const blogs = [
    //     {title: 'Yoshi', snippet: "Lorem ipsum tititltigirngrngfangojnglan"},
    //     {title: 'Uri', snippet: "Lorem ipsum tititltigirngrngfangojnglan"},
    //     {title: 'Mehar', snippet: "Lorem ipsum tititltigirngrngfangojnglan"}
    // ];
    //res.render('index', {title: 'Home', blogs});
    res.redirect('/blogs');
});

app.get('/about',(req,res)=>{
    //res.send("<p>about page</p>");
    //res.sendFile('./views/about.html', {root: __dirname});
    res.render('about', {title: 'About'});
});

//redirects
app.get('/about-us', (req,res)=>{
    res.redirect('/about');
});

//404 error

app.use((req,res)=>{
    res.status(404).render('404', {title: "Error 404"});
});
