/** @format */

const JwtStrategy = require("passport-jwt").Strategy;
const { ObjectId } = require("mongodb");
const users = require("../Database/Models/userModel");

const { authCookieExtractor } = require("../Utils/cookieExtract");

module.exports = (passport) => {
  const opts = {};
  opts.jwtFromRequest = authCookieExtractor;
  opts.secretOrKey = process.env.JWT_SECRET || "$$demoUserDevSECRET%%";

  passport.use(
    "user",
    new JwtStrategy(opts, async (jwt_payload, done) => {
      if (jwt_payload && ObjectId.isValid(jwt_payload.id)) {
        const user = await users
          .findOne({ _id: jwt_payload.id })
          .select(["-password"]);
        if (!user) return done(null, false);
        return done(null, user);
      }
    })
  );

  

  passport.serializeUser(function (user, done) {
    done(null, user);
  });

  passport.deserializeUser(function (user, done) {
    done(null, user);
  });
};
