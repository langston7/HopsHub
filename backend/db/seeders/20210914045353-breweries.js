'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Breweries', [
      {name:"New Castle", location:"PlaceHolder", imageURL:"https://d1ynl4hb5mx7r8.cloudfront.net/wp-content/uploads/2017/11/15150155/newcastle-brown-ale-new-look-2017.jpg"},
      {name:"Ballast Point", location:"PlaceHolder", imageURL:"https://upload.wikimedia.org/wikipedia/en/8/86/Ballast_point_brewing_logo.png"},
      {name:"Cape May", location:"PlaceHolder", imageURL:"https://i0.wp.com/www.capemay.com/play/wp-content/uploads/2015/11/CapeMay.com-directory-thumbnails-450px-x-300px.png?fit=450%2C300&ssl=1"},
      {name:"Southern Tier", location:"PlaceHolder", imageURL:"https://stbcbeer.com/wp-content/uploads/2019/10/logo.png"},
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Breweries', null, {truncate: true, cascade: true, restartIdentity: true});
  }
};
