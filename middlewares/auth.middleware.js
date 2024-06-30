const jwt = require("jsonwebtoken");
const BlacklistModel = require("../models/blacklist.model");
const dotenv = require("dotenv");
dotenv.config();

const auth = async(req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];

  if (!token) {
    res.status(404).send({ message: `You are not Authorized.` });
  }

  try {

    const blacklisted = await BlacklistModel.findOne({token});
    if(blacklisted){
      return res.status(404).json({"message":"User is Blacklisted"});
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
      if (err) {
        res.status(404).send({ message: err.message });
      }

      req.body.userId = decode.userId;
      req.body.username = decode.username;
      req.body.role = decode.role;

      next();
    });
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};


module.exports = auth;
