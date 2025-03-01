//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "adamsandra8056.gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/BADBOI-v1/Queen-BHAD-DC-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VadCyFZGufJ2YW4bG42x";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VadCyFZGufJ2YW4bG42x";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/dad04122a49867dffb830.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "2348112375304";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/53353f917aa29807b8a64.jpg,https://telegra.ph/file/9f7c67312af37da75d47e.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0ZDcHJGTzVhU1pyS09sajY4SFBCZjFsMStoSVhsc2JhMlNNQW5rQWMxND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRDl6RFpFNm81K2VualJrRmtGS2JZeVRTR29nRXpJRGdGNmZoc2d2Q2xrcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2RUZMd2Y5SldIbGpHbnNDaHpZVGJpYkMvaGhJbGE1QmNlcnpyNXN1b1djPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVN0dSRXUyZEJLUnA2aDFsMzl6dy95U1pqZXpHL29kbVphTWZxTmJEM2lZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZPdzJ2UFZDQUtjWG1zM05rNVZpSWFvVlljdWlMSVFmRDBNUVpmL1o3Mkk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFFSUFtajVFV0ZnRnFkbEd6T21aNHIvbW9Gekh2eUtsT1dSeFh6S1pvUms9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0FkZklkRG1LYk5OQVV4dWpDS2puaE0rUUN4TTdTaFJudThTSDhxczczWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSlVaWjNlaUV4UlplcDNqTWZydDhHTXRNd3JkYVY1SURsNk1ZeHdxa0lqcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkUxd05sMFVST1ZZZ3Z5UjBPaFROdllqRWpLOW1VMlhBaHhqWDJqMStid0RFeHVITkkvRk9rbG9UZ2FBQ0g2V0Irck5sSEJMekRrcUhiNDhIRVh5OWlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTEyLCJhZHZTZWNyZXRLZXkiOiJnODFOdDlkdUR2ZXJwMGVBYUtPUUZzVHFMRlhvbVVIeWI1SUdlS09sdjNjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiItT2tZT2ZZOFR3cV85a1RQX3RPQXVBIiwicGhvbmVJZCI6ImY2YjE5OWMyLTAxZjQtNDY5Yi1iZTYwLTIxZjA4YjMzODY4MiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzQnpnYUpwaEFkRFlCeGhCUmNyMkVmWWhpbWc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWmtRNkZGZFdVU2QrcjAzT2Zmait2Q1RMY0VNPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlRGNkJIM0NHIiwibWUiOnsiaWQiOiIyMzQ4MTEyMzc1MzA0OjcyQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLT1hrMDBReDdTTHZnWVlBeUFBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJUelozUkc2Y2grZDdyOU9hUUdaZ20yQXhHQlFkVkVlRkZvVzA2MkxoZ3hNPSIsImFjY291bnRTaWduYXR1cmUiOiJ6SVNvRHZ2RG5Vc09pd00zMEprM052NkhwSm9tbkgyM2czTXpUTUpSZXQzdmFxakxQZ1R5eFNncWJCdUN5bHBrUldDd2JNeDF1MW5POHYwYk16ZmZBZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoidlQzTmxGYSs5eDAzRGszbE5mKzJBY3NNbTVHRDhTc0trQW1PNjRpMncwbzBiYkk0NDdDT3NBY2xKMjFMVnBpdHV3cFAvckZrcWRDY2FoK2VZYnF5akE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MTEyMzc1MzA0OjcyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlU4MmQwUnVuSWZuZTYvVG1rQm1ZSnRnTVJnVUhWUkhoUmFGdE90aTRZTVQifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NDA4MjMxMjZ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_♡ƁӇƛƊ ƊƇᴸᴼᴿᴰ-MD™`",
  author: process.env.PACK_AUTHER || "QUEEN_♡ƁӇƛƊ ƊƇᴸᴼᴿᴰ-MD",
  packname: process.env.PACK_NAME || "♡ Ɓ Ӈ ƛ Ɗ Ɗ Ƈᴸ ᴼ ᴿ ᴰ",
  botname: process.env.BOT_NAME || "QUEEN_♡ƁӇƛƊ ƊƇᴸᴼᴿᴰ-MD",
  ownername: process.env.OWNER_NAME || "MUBARAK OLAMSTECH",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "B H A D").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
