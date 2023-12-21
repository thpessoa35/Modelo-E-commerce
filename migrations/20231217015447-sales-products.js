'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  
      await queryInterface.createTable('SalesProducts',{ 
        idSale: {
          type: Sequelize.STRING,
          primaryKey: true,
          allowNull: false
        },    
        idProduct: {
          type: Sequelize.STRING,
          allowNull: false,
          references: {model: 'products' ,key: 'idProduct'}
        },
        idUser: {
          type: Sequelize.STRING,
          allowNull: false,
          references: {model: 'users', key: 'id'}
        },
        Quantity: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        totalPrice: {
          type: Sequelize.DECIMAL(10,2),
          allowNull: false
        },createdAt: {
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
   
   
     await queryInterface.dropTable('SalesProducts');
     
  }
};
