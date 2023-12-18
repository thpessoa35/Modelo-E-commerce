import * as path from 'path';

module.exports = {
  config: path.resolve(__dirname, 'src', 'database', 'pg', 'sequelize.ts'),
  'migrations-path': path.resolve(__dirname, 'src', 'database', 'migrations')
};
