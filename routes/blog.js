const express = require('express');
const path = require('path');
const router = express.Router();
const blogs = require('../data/blogs.js');


// Define a simple route


router.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '../templates/index.html'));
     res.render('home');

});


router.get('/blog', (req, res) => {
  // res.sendFile(path.join(__dirname, '../views/blogHome.html'));
  res.render('blogHome', {
      blogs: blogs
  });
});

router.get('/blogpost/:slug', (req, res) => {
   const myBlog = blogs.find(e => e.slug === req.params.slug);

   if (!myBlog) {
     return res.status(404).send('Blog post not found');
   }

  // res.sendFile(path.join(__dirname, '../views/blogPage.html'));
  res.render('blogPage', {
     title: myBlog[0].title,
     content: myBlog[0].content,
     slug:  myBlog[0].slug
  })
});

module.exports = router;
