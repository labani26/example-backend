// import express from 'express';
// import { engine } from 'express-handlebars';
// import path from 'path';
// import blogRouter from './routes/blog.js';

const express = require("express");
const engine = require("express-handlebars");
const path = require("path");
const blogRouter = require("./routes/blog.js");
const blogs = require('./data/blogs.js');

const app = express();
const port = 3000;

app.engine('handlebars', engine.engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views')); // Ensure views directory is set correctly

// // Middleware to serve static files
app.use(express.static(path.join(__dirname, 'static')));

// Use the routes defined in routes/blog.js
app.use('/', blogRouter);


app.get('/blogPosts', (req, res) => {
  console.log(blogs);
  res.render('blogs', {
    blogs: blogs
  })
})

// Start the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.listen(3001);
