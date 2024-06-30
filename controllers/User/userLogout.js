const BlacklistModel = require("../../models/blacklist.model");

const logout = async (req, res) => {
  const { refreshToken } = req.body;
  console.log(refreshToken)

  try {
    if (!refreshToken) {
      res.status(404).send({ message: "Token not Available." });
    } else {
      const logoutData = new BlacklistModel({ token: refreshToken });
      await logoutData.save();
      res.status(200).send({ message: "Logout Successful", logoutData });
    }
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};

module.exports = logout;
