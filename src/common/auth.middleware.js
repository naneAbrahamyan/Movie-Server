import users from "../service/users.service.js";
import Forbidden from "http-errors";
import expressUnless from "express-unless";

const jwtMiddleware = async (req, res, next) => {
  let token;
  try {
    token = req.header("Authorization").split(" ")[1];
    req.user = users.validateToken(token);
  } catch (err) {
    return next(new Forbidden(err.message));
  }
  next();
};

jwtMiddleware.unless = expressUnless;

export default jwtMiddleware;
