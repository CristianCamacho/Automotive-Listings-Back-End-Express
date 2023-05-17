const db = require('../db');
const User = require('../models/User')(db.sequelize, db.Sequelize);

const login = (req, res) => {
  
  const userName = req.body.userName;
  console.log(userName)
    User.create({
      userName
    }).then ( newUser => {
      res.status(201).json(newUser)
    }).catch(error => {
      res.status(500).json({ error:'Error: ' + error})
    })
};
  
const logout = (req, res) => {
    req.session.destroy();
    res.send('Logged out successfully');
};

  module.exports = {
    login,
    logout
}