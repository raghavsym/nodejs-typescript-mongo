import User from "../models/userModel";
import * as jwt from "jsonwebtoken";
import { secrets } from "../config/auth.config";

// const User = db.users;

export const checkDuplicateUserEmail = async (email) => { 
  try {
    const user = await User.find({ email });
    if (user && user.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    console.log(err);
  }
};

export const verifyJwt = async (req, res, next) => {
  // JWT authentication.
  const token = req.headers["x-access-token"];
  if (!token) {
    return res.status(403).send({ message: "A token is required for authentication." });
  }
  try {
    req.token = token;
    const decoded = await jwt.verify(req.token, secrets.JWT_KEY);
    req.user = decoded.userData;
  } catch (err) {
    return res.status(401).send("Invalid Token!");
  }
  next();
};
