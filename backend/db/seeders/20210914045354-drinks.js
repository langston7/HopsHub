'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Drinks', [
      {name:'New Castle Brown Ale', abv:5.0, ibu:80, variety:'Brown Ale', imageURL:"https://products2.imgix.drizly.com/ci-newcastle-brown-ale-0d899397a9a3d1a1.jpeg?auto=format%2Ccompress&ch=Width%2CDPR&fm=jpg&q=20", breweryId:1, userId:1,},
      {name:'Victory at Sea', abv:5.0, ibu:80, variety:'Porter', imageURL:"https://ballastpoint.com/wp-content/uploads/2018/05/16oz_Can-Victory_At_Sea-Front-1.png", breweryId:2, userId:1,},
      {name:'Coastal Evacuation', abv:5.0, ibu:80, variety:'Double IPA', imageURL:"https://www.totalwine.com/dynamic/x490,6pk/media/sys_master/twmmedia/h9f/h27/11234327756830.png", breweryId:3, userId:1,},
      {name:'Cape May White', abv:5.0, ibu:80, variety:'Belgian Wheat Ale', imageURL:"https://www.totalwine.com/dynamic/490x/media/sys_master/twmmedia/he0/hb6/14072350244894.png", breweryId:3, userId:1,},
      {name:'Pumking', abv:5.0, ibu:80, variety:'Pumpkin Ale', imageURL:"https://products2.imgix.drizly.com/ci-southern-tier-pumking-757b84735bcaad82.png?auto=format%2Ccompress&ch=Width%2CDPR&fm=jpg&q=20", breweryId:4, userId:1,},
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Drinks', null, {truncate: true, cascade: true, restartIdentity: true});
  }
};
