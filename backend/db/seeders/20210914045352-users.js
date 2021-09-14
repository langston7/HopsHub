'use strict';

const bcrypt = require('bcryptjs')
const faker = require('faker');

const urls = [
  "https://srk.shib.live/images/thumb/f/f8/KOF2002_Ralf_Face.png/50px-KOF2002_Ralf_Face.png",
  "https://srk.shib.live/images/thumb/f/f0/KOF2002_Kim_Face.png/50px-KOF2002_Kim_Face.png",
  "https://srk.shib.live/images/thumb/2/23/KOF2002_Terry_Face.png/50px-KOF2002_Terry_Face.png",
  "https://srk.shib.live/images/thumb/c/cc/KOF2002_Angel_Face.png/50px-KOF2002_Angel_Face.png",
  "https://srk.shib.live/images/thumb/d/d3/KOF2002_Ryo_Face.png/50px-KOF2002_Ryo_Face.png",
  "https://srk.shib.live/images/thumb/5/58/KOF2002_Clark_Face.png/50px-KOF2002_Clark_Face.png",
  "https://srk.shib.live/images/thumb/4/41/KOF2002_Kyo_Face.png/50px-KOF2002_Kyo_Face.png",
  "https://srk.shib.live/images/thumb/6/64/KOF2002_Whip_Face.png/50px-KOF2002_Whip_Face.png",
  "https://srk.shib.live/images/thumb/6/60/KOF2002_Yashiro_Face.png/50px-KOF2002_Yashiro_Face.png",
  "https://srk.shib.live/images/thumb/6/60/KOF2002_Benimaru_Face.png/50px-KOF2002_Benimaru_Face.png",
]

module.exports = {
  up: (queryInterface, Sequelize) => {
    const values = []
    for (let i = 0; i < 10; i++) {
      values.push({
        email: faker.internet.email(),
        username: faker.name.findName(),
        hashedPassword: bcrypt.hashSync(`password${i}`),
        profilePictureURL: urls[i]
      })
    }
    return queryInterface.bulkInsert('Users', values, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {truncate: true, cascade: true, restartIdentity: true});
  }
};
