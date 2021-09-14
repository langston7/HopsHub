'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Breweries', [
      {name:"New Castle", location:"PlaceHolder"},
      {name:"Ballast Point", location:"PlaceHolder"},
      {name:"Cape May", location:"PlaceHolder"},
      {name:"Southern Tier", location:"PlaceHolder"},
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Breweries', null, {truncate: true, cascade: true, restartIdentity: true});
  }
};
