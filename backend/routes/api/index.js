const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const reviewsRouter = require('./reviews.js');
const drinksRouter = require('./drinks.js');

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/reviews', reviewsRouter);
router.use('/drinks/', drinksRouter);

router.post('/test', (req, res) => {
  res.json({ requestBody: req.body });
});

module.exports = router;
