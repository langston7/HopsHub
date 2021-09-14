const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const { Review, User, Drink } = require('../../db/models');


router.get('/', asyncHandler(async (req, res) => {
  const reviews = await Review.findAll({include: [{model: User}, {model:Drink}]});
  res.json(reviews);
}))

module.exports = router;
