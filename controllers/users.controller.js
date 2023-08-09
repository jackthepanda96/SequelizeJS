const db = require('../models');
const User = db.users;

exports.insert = async (input) =>{
    await User.create(input);
}

exports.getAll = async () =>{
    // const result = await User.findAll();
    const result = await User.findAll({
        attributes: ['id','name'],
        mapToModel: true,
        model: User
    });
    return result;
}

exports.delete = async (id) =>{
    await User.destroy({
        where:{
            id: id,
        }
    })
}