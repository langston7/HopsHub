const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const { Review, User, Drink, Brewery } = require('../../db/models');


router.get('/', asyncHandler(async (req, res) => {
  const reviews = await Review.findAll({include: [{model: User}, {model:Drink, include: [Brewery]}]});
  res.json(reviews);
}))


router.post('/', asyncHandler(async (req, res) => {
  const {comment, userId, drinkId} = req.body;
  await Review.create({comment, userId, drinkId});
}));


module.exports = router;
