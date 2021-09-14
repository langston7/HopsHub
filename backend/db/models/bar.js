'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bar = sequelize.define('Bar', {
    name: DataTypes.STRING,
    location: DataTypes.STRING
  }, {});
  Bar.associate = function(models) {
    const columnMapping = {
      through: 'DrinksToBar',
      otherKey: 'drinkId',
      foriegnKey: 'barId'
    }
    Bar.belongsToMany(models.Drink, columnMapping);
  };
  return Bar;
};
