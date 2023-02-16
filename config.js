require("dotenv").config();

const urlMongo = process.env.URLMONGO;
const secretSession = process.env.SECRETSESSION;
const emailAdmin = process.env.EMAILADMIN;
const passwordAdmin = process.env.PASSWORDADMIN;
const publicAvatarsUrl = process.env.PUBLIC_URL_AVATARS;
const timeExpiration = process.env.TIMEEXPIRATION;
const port = process.env.PORT;

module.exports = {
  urlMongo,
  secretSession,
  emailAdmin,
  passwordAdmin,
  publicAvatarsUrl,
  timeExpiration,
  port,
};
