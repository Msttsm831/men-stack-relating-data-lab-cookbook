// controllers/foods.js

const express = require('express');
const router = express.Router();

const User = require('../models/user.js');

// router logic will go here - will be built later on in the lab
router.get('/', async (req, res) => {
    try {
      const currentUser = await User.findById(req.session.user._id);
      res.render('foods/index.ejs', {
        user: currentUser,
        pantry: currentUser.pantry,
      });
    } catch (error) {
      console.log(error);
      res.redirect('/');
    }
  });
  
  // Render the new food item form
  router.get('/new', (req, res) => {
    res.render('foods/new.ejs');
  });
  
  // Handle the addition of a new food item
  router.post('/', async (req, res) => {
    try {
      const currentUser = await User.findById(req.session.user._id);
      currentUser.pantry.push(req.body);
      await currentUser.save();
      res.redirect(`/users/${currentUser._id}/foods`);
    } catch (err) {
      console.log(err);
      res.redirect('/');
    }
  });
  
  module.exports = router;