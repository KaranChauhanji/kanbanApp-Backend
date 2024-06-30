const bcrypt = require("bcrypt");
const UserModel = require("../../models/user.model");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
      const user = await UserModel.findOne({ email });
    bcrypt.compare(password, user.password,async(err, result) => {
      if (err) {
        return res
          .status(404)
          .send({ message: `Error in Comparing password: ${err.message}` });
      }

      if (result) {
        const accessToken = jwt.sign(
          {
            username: user.username,
            email: user.email,
            userId: user._id,
            role: user.role,
          },
          process.env.JWT_SECRET, {expiresIn:'1d'}
        );

        const refreshToken = jwt.sign(
          {
            username: user.username,
            email: user.email,
            userId: user._id,
            role: user.role,
          },
          process.env.JWT_SECRET, {expiresIn:'7d'}
        );

        res.status(200).send({message:`Login Successful`,"accessToken":accessToken, "refreshToken":refreshToken});
      }
    });
  } catch (error) {
    res.status(404).send({ message: `Wrong Credentials: ${error.message}` });
  }
};


module.exports = login