const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/teraab/Suhail-Md";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/C0p1D8APYuWDcqO3tumVHd";
global.website=process.env.GURL || "https://chat.whatsapp.com/C0p1D8APYuWDcqO3tumVHd" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923472653626" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923472653626";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/758549f0de2219884f387.jpg,https://telegra.ph/file/9498496b010dfb5900b80.jpg,https://telegra.ph/file/59bf80efbb6e6576b5a52.jpg,https://telegra.ph/file/ee0e191363161e88e4743.jpg" // ramadan Theme Images
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923472653626,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923xxxxxxx,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_03_09_07_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICA3NyxcbiAgICAgICAgNCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjQxLFxuICAgICAgICA1MixcbiAgICAgICAgNzQsXG4gICAgICAgIDEzLFxuICAgICAgICAzNyxcbiAgICAgICAgMTcsXG4gICAgICAgIDgyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE4NixcbiAgICAgICAgNjEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDgwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNDEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNjgsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNixcbiAgICAgICAgMjA3LFxuICAgICAgICAzMSxcbiAgICAgICAgMzEsXG4gICAgICAgIDczLFxuICAgICAgICA1NSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjE1LFxuICAgICAgICA1LFxuICAgICAgICA1OCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxODgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEyNixcbiAgICAgICAgNTAsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDU1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNTYsXG4gICAgICAgIDEyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDgwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjMsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMzksXG4gICAgICAgIDUsXG4gICAgICAgIDM0LFxuICAgICAgICA3MCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNSxcbiAgICAgICAgNyxcbiAgICAgICAgMjExLFxuICAgICAgICAxODIsXG4gICAgICAgIDYsXG4gICAgICAgIDczLFxuICAgICAgICAyMDYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MixcbiAgICAgICAgMTg4LFxuICAgICAgICA3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEwMixcbiAgICAgICAgODcsXG4gICAgICAgIDQxLFxuICAgICAgICAzNCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDU3LFxuICAgICAgICAyMixcbiAgICAgICAgMTc0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEzNixcbiAgICAgICAgOTQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDM4LFxuICAgICAgICA5NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTQ1LFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAyNDksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTM5LFxuICAgICAgICA5MyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEsXG4gICAgICAgIDIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNCxcbiAgICAgICAgMjM4LFxuICAgICAgICA5OSxcbiAgICAgICAgOTYsXG4gICAgICAgIDQ3LFxuICAgICAgICA3OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIxMixcbiAgICAgICAgODYsXG4gICAgICAgIDcxLFxuICAgICAgICA4OSxcbiAgICAgICAgNTMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjA5LFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjM2LFxuICAgICAgICA5NyxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTA3LFxuICAgICAgICA1NCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNyxcbiAgICAgICAgNTMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjQyLFxuICAgICAgICAyLFxuICAgICAgICAyMyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDI4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMzAsXG4gICAgICAgIDcyLFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTAyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDExM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMTU1LFxuICAgICAgICA0MixcbiAgICAgICAgMTk1LFxuICAgICAgICA0MSxcbiAgICAgICAgMTMzLFxuICAgICAgICAzOSxcbiAgICAgICAgMTk0LFxuICAgICAgICAzNixcbiAgICAgICAgNDcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTQ5LFxuICAgICAgICA2OSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDU3LFxuICAgICAgICAyOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjQyLFxuICAgICAgICA3NixcbiAgICAgICAgMjA3LFxuICAgICAgICAxNyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjE5LFxuICAgICAgICA2MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA1NCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDg3LFxuICAgICAgICA5MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDk4LFxuICAgICAgICAxNSxcbiAgICAgICAgMTg1LFxuICAgICAgICA5OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDM3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNDEsXG4gICAgICAgIDM0LFxuICAgICAgICAxNSxcbiAgICAgICAgMTIwLFxuICAgICAgICA1OCxcbiAgICAgICAgNyxcbiAgICAgICAgMTI2LFxuICAgICAgICA3NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE3MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJhb0NRN3hHYjNnNlMrOE1uWHRJZTFyWkh1T1ZFMW9TcU5xc1JDVlloTXFRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI2RGNESzdXRlFtZTNpSmJhcllsazlRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjM3NWQzZTUxLTI2ODgtNGY4OS05MjNiLWI1OTM5N2E5Yzg3NFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2NCxcbiAgICAgIDg3LFxuICAgICAgMTg1LFxuICAgICAgMTY0LFxuICAgICAgMjA3LFxuICAgICAgODgsXG4gICAgICAxMDcsXG4gICAgICAxNzAsXG4gICAgICAxNTMsXG4gICAgICA4MixcbiAgICAgIDQyLFxuICAgICAgMjI1LFxuICAgICAgMTQ4LFxuICAgICAgNzcsXG4gICAgICA4LFxuICAgICAgMjAsXG4gICAgICAzOSxcbiAgICAgIDExMSxcbiAgICAgIDE5NixcbiAgICAgIDg2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzksXG4gICAgICAxNTQsXG4gICAgICAyMDAsXG4gICAgICA3MCxcbiAgICAgIDQzLFxuICAgICAgMTcxLFxuICAgICAgODksXG4gICAgICA1OCxcbiAgICAgIDQzLFxuICAgICAgMjQzLFxuICAgICAgMTkwLFxuICAgICAgMTg1LFxuICAgICAgNjAsXG4gICAgICA1OSxcbiAgICAgIDIxMyxcbiAgICAgIDIwMixcbiAgICAgIDIwMyxcbiAgICAgIDkwLFxuICAgICAgMTc1LFxuICAgICAgODRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKejFpTWtHRVBQVTdMUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkVBUnBPcnVJaTBNYk43MU1WREtkNGY4U1lqY1JnTmtBUEx5TTlRS3FBaWc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiTy8vczd3bXh5bldVOTQxeC94bmxQTzBLUzdkNmozQ2F4eWZDMlhNQnFrM1k0UEs3cEFzUy9uckJEbjdNb2VuUkJFeVJNOHVUdXc3eTkxSzRaT2xjQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiTDFXUTFxendEN2k3TkNQeEQxeEpOb0FRNW5FMVp1YytZTzNpSFZoNmFZcFNFYm5ha0lkR1RKQk94RHR6YjVrUmI2Wnp3WHRDMDBDNGJmSXRFcUx5Q1E9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjM0NzI2NTM2MjY6MjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjQzMTY5MTE5MDcwNjI6MjNAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjM0NzI2NTM2MjY6MjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNDBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTQ0NDk4NFxufSIKfQ==" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "©☯︎༆𝐇𝐀𝐌𝐙𝐀_𝐂𝐘𝐁𝐄𝐑༄☠︎︎" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "☯︎༆𝐇𝐀𝐌𝐙𝐀_𝐂𝐘𝐁𝐄𝐑༄☠︎︎",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "☯︎༆𝐇𝐀𝐌𝐙𝐀_𝐂𝐘𝐁𝐄𝐑༄☠︎︎",
  ownername:process.env.OWNER_NAME|| "☯︎༆𝐇𝐀𝐌𝐙𝐀_𝐂𝐘𝐁𝐄𝐑༄☠︎︎",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};

























global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
