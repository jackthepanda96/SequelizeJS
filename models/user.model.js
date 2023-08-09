module.exports = (sequilize, Sequelize) => {
    let Users = sequilize.define('users', {
        name: {
            type: Sequelize.STRING,
        },
    },{
        paranoid: true,
    });

    return Users;
}