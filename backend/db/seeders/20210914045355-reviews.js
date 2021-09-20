'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reviews', [
      {comment:"Impressive.  Very nice.", userId:5, drinkId:1},
      {comment:"aaaaaaa i love this beer", userId:2, drinkId:1},
      {comment:"I am so pleased to say how great this brew tastes!", userId:5, drinkId:2},
      {comment:"This is the best I’ve had. Great flavor, not heavy and doesn’t get you drunk! I’ll be trying the others soon. Good work.", userId:2, drinkId:2},
      {comment:"I hadn’t had an IPA in years after quitting alcohol. I must say that the IPA varieties offered by Athletic Brewing fantastically delicious and balanced. I had thought that I would never enjoy another hoppy, delightful beer. I feel truly grateful to have found this company and their products. I’m able to enjoy one or more without any of the negative effects of alcohol, but with ALL the flavor. Great job!! Thank you so much!!", userId:4, drinkId:3},
      {comment:"I never leave reviews, but this is just too damn good. I recently ditched alcohol because I was sick of skipping morning rides/workouts when I felt too hungover to train. However, I love the taste of beer, and I enjoy drinking with my friends after a long day on the bike in the sun. Now, I feel like I can have it all. Plus, the taste is incredible. I've tried a lot of non-alcoholic beers, and none of them come close to this one.", userId:3, drinkId:3},
      {comment:"Again, here's another NA beer that tastes like the real thing. If I didn't know, I'd swear I was drinking a 6% IPA. This is absolutely excellent.", userId:4, drinkId:4},
      {comment:"This is my go to evening brew after a good day of play and work. I gave up IPAs years ago in favor of red wine. This brew has inspired me to consider ditching my wine habit.", userId:2, drinkId:4},
      {comment:"The Run Wild is now hitting sold out status! Say it ain't so!!! Been ordering Athletic for about a year now. This one was always in stock.", userId:3, drinkId:4},
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reviews', null, {truncate: true, cascade: true, restartIdentity: true});
  }
};
