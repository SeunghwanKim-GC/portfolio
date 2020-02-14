var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Seunghwan Kim Portfolio' });
});

/* Get about me Page */
router.get('/about_me', (req, res, next) => {
  res.render('about_me', { title: 'About Me' })
})

/* Get project page */
router.get('/project_pages', (req, res, next) => {
  res.render('project_pages', { title: 'Project Page' })
})

/* Get contact me page */
router.get('/contact_me', (req, res, nexr) => {
  res.render('contact_me', { title: 'Contact Me' })
})

module.exports = router;
