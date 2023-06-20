const { sequelize, DataTypes } = require('../db');

const users = sequelize.define('users', {
id_user: {
    type: DataTypes.STRING,
    allowNull: false
},

id_type:{
    type: DataTypes.STRING,
    allowNull: false
},

user_name:{
    type: DataTypes.STRING,
    allowNull: false
},
user_email:{
    type: DataTypes.STRING,
    allowNull: false,
    unique: {
        args: true,
        messge: 'El email ya existe'
    },
},
user_password:{
    type: DataTypes.STRING,
    allowNull: false
}
},{
    createdAt: true,
    updatedAt: true,
    deletedAt: true,
    tableName: 'users'
});

users.sync();

module.exports = users