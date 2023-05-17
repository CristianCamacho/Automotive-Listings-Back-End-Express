const login = (req, res) => {
    req.session.user = req.body.user;
    res.send('Logged in successfully');
  };
  
const logout = (req, res) => {
    req.session.destroy();
    res.send('Logged out successfully');
  };

  module.exports = {
    login,
    logout
}