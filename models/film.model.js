const { category } = require(".");
module.exports = (sequelize, Sequelize) =>{
    let Films = sequelize.define(
        'film',{
            film_name:{
                type: Sequelize.STRING
            }
        }
    );
    
    return Films;
}