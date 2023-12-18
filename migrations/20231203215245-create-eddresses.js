'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
 
     await queryInterface.createTable('eddresses',{ 
      idEdresses: {
      type: Sequelize.STRING,
      primaryKey: true,
      allowNull: false
    },
    idUser:{
      type: Sequelize.STRING,
      allowNull: false,
      references: {model: 'users',key: 'id'},
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
     rua:{
      type: Sequelize.STRING,
      allowNull: false,
    },
     bairro:{
      type: Sequelize.STRING,
      allowNull: false,
    },
     numero: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    cep: {
      type: Sequelize.STRING,
      allowNull: false
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
  
     await queryInterface.dropTable('eddresses');
     
  }
};
