const Sequelize = require('sequelize');
const config = require('./sequelizeConfig');

const env = process.env.NODE_ENV || 'development';
const sequelize = new Sequelize(config[env]);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require('./models/User')(sequelize, Sequelize);

module.exports = db;