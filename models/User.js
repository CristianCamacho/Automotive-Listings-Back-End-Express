module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        userName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })

    return User;
}

// CREATE TABLE users (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     username VARCHAR(255),
//     createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//     updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
//   );