const Sequelize = require('sequelize');
const dbConfig = require('../config/db.config');
const sq = new Sequelize(
    dbConfig.DB, 
    dbConfig.USER, 
    dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    port: dbConfig.PORT,
    dialect: dbConfig.dialect,
});

const db = {};
db.Sequelize = Sequelize;
db.sequilize = sq;

db.users = require('./user.model')(sq, Sequelize);
db.category = require('./category.model')(sq, Sequelize);
db.film = require('./film.model')(sq, Sequelize);


// Relationship

db.film.belongsToMany(db.category,{
    through: "category_film",
});

db.category.belongsToMany(db.film,{
    through: "category_film",
});

module.exports = db;