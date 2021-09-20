const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const { Review, User, Drink, Brewery } = require('../../db/models');


router.get('/', asyncHandler(async (req, res) => {
  const reviews = await Review.findAll({include: [{model: User}, {model:Drink, include: [Brewery]}]});
  res.json(reviews);
}));

router.post('/', asyncHandler(async (req, res) => {
  const {comment, userId, drinkId} = req.body;
  const review = await Review.create({comment, userId, drinkId});
  return res.json({
    review,
  });
}));

router.put('/:id', asyncHandler(async(req, res) => {
  const {comment, reviewId} = req.body;
  review = await Review.findByPk(reviewId);
  await review.update({comment})
}));

router.delete('/', asyncHandler(async (req, res) => {
  const { reviewId } = req.body;
  review = await Review.findByPk(reviewId);
  await review.destroy();
}));

module.exports = router;
