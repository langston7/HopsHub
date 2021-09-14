const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const { User, Drink, Brewery } = require('../../db/models');


router.get('/', asyncHandler(async (req, res) => {
  const drinks = await Drink.findAll({include: [{model: User}, {model:Brewery}]});
  res.json(drinks);
}))

module.exports = router;
