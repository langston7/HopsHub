'use strict';
module.exports = (sequelize, DataTypes) => {
  const Drink = sequelize.define('Drink', {
    name: DataTypes.STRING,
    ibv: DataTypes.DECIMAL,
    variety: DataTypes.STRING,
    breweryId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Drink.associate = function(models) {
    Drink.hasMany(models.Review, {foreignKey:'drinkId'})
    Drink.belongsTo(models.User, {foreignKey:'userId'});
    Drink.belongsTo(models.Brewery, {foreignKey:'breweryId'});
    const columnMapping = {
      through: 'DrinksToBar',
      otherKey: 'barId',
      foriegnKey: 'drinkId'
    }
    Drink.belongsToMany(models.Bar, columnMapping);
  };
  return Drink;
};
