const { Sequelize } = require('sequelize');

// Database connection configuration
// Configure via environment variables if available, otherwise fall back to sensible defaults.
const DB_NAME = process.env.DB_NAME || 'pet_sitting_db';
const DB_USER = process.env.DB_USER || 'root';
const DB_PASS = process.env.DB_PASS || 'root';
const DB_HOST = process.env.DB_HOST || 'localhost';
const DB_PORT = process.env.DB_PORT || 3306;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: 'mysql',
  logging: false,
  define: { timestamps: false }
});

// Export the sequelize instance and a helper to initialize models
const initModels = require('./init-models');
const models = initModels(sequelize);

module.exports = {
  sequelize,
  Sequelize,
  models,
  initModels,
};
