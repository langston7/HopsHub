'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Drinks', [
      {name:'New Castle Brown Ale', ibv:0, variety:'Brown Ale', breweryId:1, userId:1,},
      {name:'Victory at Sea', ibv:0, variety:'Porter', breweryId:2, userId:1,},
      {name:'Coastal Evacuation', ibv:0, variety:'Double IPA', breweryId:3, userId:1,},
      {name:'Cape May White', ibv:0, variety:'Belgian Wheat Ale', breweryId:3, userId:1,},
      {name:'Pumking', ibv:0, variety:'Pumpkin Ale', breweryId:4, userId:1,},
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Drinks', null, {truncate: true, cascade: true, restartIdentity: true});
  }
};
