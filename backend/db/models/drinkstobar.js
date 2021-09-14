'use strict';
module.exports = (sequelize, DataTypes) => {
  const DrinksToBar = sequelize.define('DrinksToBar', {
    drinkId: DataTypes.INTEGER,
    barId: DataTypes.INTEGER
  }, {});
  DrinksToBar.associate = function(models) {

  };
  return DrinksToBar;
};
