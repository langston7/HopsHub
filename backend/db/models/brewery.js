'use strict';
module.exports = (sequelize, DataTypes) => {
  const Brewery = sequelize.define('Brewery', {
    name: DataTypes.STRING,
    location: DataTypes.STRING
  }, {});
  Brewery.associate = function(models) {
    Brewery.hasMany(models.Drink, {foreignKey: 'breweryId'});
  };
  return Brewery;
};
