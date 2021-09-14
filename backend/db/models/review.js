'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    comment: DataTypes.TEXT,
    userId: DataTypes.INTEGER,
    drinkId: DataTypes.INTEGER
  }, {});
  Review.associate = function(models) {
    Review.belongsTo(models.User, {foreignKey: 'userId'});
    Review.belongsTo(models.Drink, {foreignKey: 'drinkId'});
  };
  return Review;
};
