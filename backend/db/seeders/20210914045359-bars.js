'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Bars', [
      {name:"Bar1", location:"Placeholder"},
      {name:"Bar2", location:"Placeholder"},
      {name:"Bar3", location:"Placeholder"},
      {name:"Bar4", location:"Placeholder"},
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Bars', null, {truncate: true, cascade: true, restartIdentity: true});
  }
};
