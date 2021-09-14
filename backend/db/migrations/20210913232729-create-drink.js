'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Drinks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      ibv: {
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      variety: {
        allowNull: false,
        type: Sequelize.STRING
      },
      breweryId: {
        allowNull: false,
        references: {model: "Breweries"},
        type: Sequelize.INTEGER
      },
      userId: {
        allowNull: false,
        references: {model: "Users"},
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        defaultValue: new Date(),
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        defaultValue: new Date(),
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Drinks');
  }
};
