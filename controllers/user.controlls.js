const db = require('../db');
const User = require('../models/User')(db.sequelize, db.Sequelize);
const bcrypt = require('bcrypt');

const login = (req, res) => {

  
  console.log(username)
  res.send('Logged in')
};

const logout = (req, res) => {
  req.session.destroy();
  res.send('Logged out successfully');
};

const createUser = (req, res) => {
  username = req.body.username
  password = req.body.password

  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      console.error('Error while hashing password:', err);
      // Handle the error
    } else {
      // Use the hashedPassword for further processing (e.g., storing in the database)
      password = hashedPassword
      User.create({
        username,
        password
      }).then(newUser => {
        res.status(201).json(newUser)
      }).catch(error => {
        res.status(500).json({ error: 'Error: ' + error })
      })
      console.log('Hashed password:', hashedPassword);
    }
  });
}

module.exports = {
  login,
  logout,
  createUser
}