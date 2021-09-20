const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const { User, Drink, Brewery } = require('../../db/models');


router.get('/', asyncHandler(async (req, res) => {
  const drinks = await Drink.findAll({include: [{model: User}, {model:Brewery}]});
  res.json(drinks);
}))


router.post('/', asyncHandler(async (req, res) => {
  const { beerName, breweryId, abv, ibu, variety, userId } = req.body;
  const name = beerName;
  const imageURL = "https://oldschool.runescape.wiki/images/thumb/5/5a/Beer_detail.png/800px-Beer_detail.png?b3760";
  const newDrink = await Drink.create({ name, breweryId, abv, ibu, variety, userId, imageURL });
  return res.json({
    newDrink,
  });
 }))

module.exports = router;
