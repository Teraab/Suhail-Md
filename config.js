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
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923xxxxxxx,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_16_07_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICA1NCxcbiAgICAgICAgMTksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDczLFxuICAgICAgICA3NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDQ1LFxuICAgICAgICA5MixcbiAgICAgICAgMjcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjE0LFxuICAgICAgICAzNCxcbiAgICAgICAgNjcsXG4gICAgICAgIDk1LFxuICAgICAgICAzMyxcbiAgICAgICAgMjMyLFxuICAgICAgICA4NixcbiAgICAgICAgMTU4LFxuICAgICAgICA1OCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTkwLFxuICAgICAgICAxODQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjIwLFxuICAgICAgICA3NCxcbiAgICAgICAgODcsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDI5LFxuICAgICAgICA3MyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxODQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTU4LFxuICAgICAgICA2MixcbiAgICAgICAgNjQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTc2LFxuICAgICAgICA1OCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDYxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjA2LFxuICAgICAgICA3OCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEwLFxuICAgICAgICA2OSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDc4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDM5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgODYsXG4gICAgICAgIDg3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNDgsXG4gICAgICAgIDg4LFxuICAgICAgICA0OSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDk1LFxuICAgICAgICA3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTExLFxuICAgICAgICAyNDQsXG4gICAgICAgIDkxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDMxLFxuICAgICAgICAxODMsXG4gICAgICAgIDY4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDU5LFxuICAgICAgICAxNSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDk3LFxuICAgICAgICAyNyxcbiAgICAgICAgMjYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxODIsXG4gICAgICAgIDYzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIsXG4gICAgICAgIDU2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTIsXG4gICAgICAgIDY5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE0LFxuICAgICAgICA5NyxcbiAgICAgICAgMTIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDUyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDg2LFxuICAgICAgICAxNSxcbiAgICAgICAgOTMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIzLFxuICAgICAgICA4MSxcbiAgICAgICAgODUsXG4gICAgICAgIDI4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDM3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxODMsXG4gICAgICAgIDYsXG4gICAgICAgIDExMCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzcsXG4gICAgICAgIDQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTQ2LFxuICAgICAgICA2OSxcbiAgICAgICAgMTc2LFxuICAgICAgICA4NSxcbiAgICAgICAgMTk0LFxuICAgICAgICA5NixcbiAgICAgICAgMTE3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNDksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNTMsXG4gICAgICAgIDY0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNjZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA1OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMSxcbiAgICAgICAgOCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNCxcbiAgICAgICAgMTYwLFxuICAgICAgICA5NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTMzLFxuICAgICAgICA2MSxcbiAgICAgICAgMTI4LFxuICAgICAgICA0MixcbiAgICAgICAgOTMsXG4gICAgICAgIDg4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTY0LFxuICAgICAgICA4NCxcbiAgICAgICAgMTczLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjQzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDMxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDQxLFxuICAgICAgICAyMyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyOSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNyxcbiAgICAgICAgNSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNjksXG4gICAgICAgIDkyLFxuICAgICAgICAyMjksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTAwLFxuICAgICAgICA5NyxcbiAgICAgICAgMjEyLFxuICAgICAgICA2OSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTAzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDkxLFxuICAgICAgICAxNDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDYwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkU2Uzl5TndvdWNmZWxRSktXR2V0SVMrRzlzZDU0LzluekpwU0lVczJlOEk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlpqU0RjclFoVG91RzdDZmdMdjVZRkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNGNkZjFjZDMtNTAzMi00NzAyLTk4M2EtNmExYzg2OWY3YWY1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDcwLFxuICAgICAgMTAzLFxuICAgICAgNjQsXG4gICAgICAxLFxuICAgICAgMTk0LFxuICAgICAgMTgsXG4gICAgICAxNTMsXG4gICAgICAxOTYsXG4gICAgICAyNDcsXG4gICAgICAyMzMsXG4gICAgICAyNTQsXG4gICAgICA4LFxuICAgICAgMTg3LFxuICAgICAgMjM3LFxuICAgICAgMTY2LFxuICAgICAgMzUsXG4gICAgICAyMCxcbiAgICAgIDIsXG4gICAgICAzOSxcbiAgICAgIDQ4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzMSxcbiAgICAgIDMyLFxuICAgICAgMTQ0LFxuICAgICAgMTU5LFxuICAgICAgNjYsXG4gICAgICAzLFxuICAgICAgMTgxLFxuICAgICAgNTYsXG4gICAgICAyMjUsXG4gICAgICAyNDEsXG4gICAgICAxOTgsXG4gICAgICAxNDUsXG4gICAgICA3MixcbiAgICAgIDIzMyxcbiAgICAgIDE0MyxcbiAgICAgIDE1MixcbiAgICAgIDE5NCxcbiAgICAgIDEyOCxcbiAgICAgIDE4NixcbiAgICAgIDc2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk5ERTUyTFhXXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjM0NzI2NTM2MjY6MTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjQzMTY5MTE5MDcwNjI6MTVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSlAxaU1rR0VLYWw2TFFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJFQVJwT3J1SWkwTWJONzFNVkRLZDRmOFNZamNSZ05rQVBMeU05UUtxQWlnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInBKS2VZNVNROUU0MzM4UjkwdnJrR1NRNTRKZnhPSkJQKzRWVVF0T3FvMDBHTFRLaDFTVFdQa3VFRWlmT0JPRUNIOWd5T1EyYjdnczRVWGRFUDlyVUN3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjFvMUl3ak9nTjVHRzRLMjNjSUc5aXpkdHlld3BrckIrQXRaM2lKN0xWcW0vMzZkVTJtUndXZFkwRW80VitIdnFYcEVmWWtpMFJFWWorNVBpY3RvWWpBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzQ3MjY1MzYyNjoxNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMixcbiAgICAgICAgICA0MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMzczMzU0XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ==" ;


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
