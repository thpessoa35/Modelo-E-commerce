import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  database: 'users',
  username: 'user',
  password: 'user',
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
});

export default sequelize;
