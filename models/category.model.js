

module.exports = (sequelize, Sequelize) =>{
    const Categories = sequelize.define(
        'categories',{
            category_name:{
                type: Sequelize.STRING
            }
        },{
            paranoid:true,
        }
    );

    return Categories;
}