const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const { User, Drink, Brewery } = require('../../db/models');


router.get('/', asyncHandler(async (req, res) => {
  const drinks = await Drink.findAll({include: [{model: User}, {model:Brewery}]});
  res.json(drinks);
}))


router.post('/drinkid', asyncHandler(async (req, res) => {
  const { beerName, breweryId, abv, ibu, variety } = req.body;
  await Drink.create({ beerName, breweryId, abv, ibu, variety });
 }))

module.exports = router;
