'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reviews', [
      {comment:"Placeholder comment", userId:5, drinkId:1},
      {comment:"Placeholder comment", userId:2, drinkId:1},
      {comment:"Placeholder comment", userId:5, drinkId:2},
      {comment:"Placeholder comment", userId:2, drinkId:2},
      {comment:"Placeholder comment", userId:4, drinkId:3},
      {comment:"Placeholder comment", userId:3, drinkId:3},
      {comment:"Placeholder comment", userId:4, drinkId:4},
      {comment:"Placeholder comment", userId:2, drinkId:4},
      {comment:"Placeholder comment", userId:3, drinkId:4},
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reviews', null, {truncate: true, cascade: true, restartIdentity: true});
  }
};
