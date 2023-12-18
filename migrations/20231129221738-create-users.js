'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
 
     await queryInterface.createTable('users',{ 
     id: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
     name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
     email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
     password: {
      type: Sequelize.STRING,
      allowNull: false, 
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: false,
    }
    });
  },

  async down (queryInterface, Sequelize) {
  
     await queryInterface.dropTable('users');
     
  }
};


