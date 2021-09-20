const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const { Brewery } = require('../../db/models');

router.get('/', asyncHandler(async (req, res) => {
  const breweries = await Brewery.findAll();
  res.json(breweries);
}))

module.exports = router;
