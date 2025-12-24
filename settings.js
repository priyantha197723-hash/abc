const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {

SESSION_ID:𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=9159275d2e6ec5ec.env.SESSION_ID 𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=9159275d2e6ec5ec ? 'Your SESSION ID Put' : process.env.SESSION_ID,
PORT: 𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=9159275d2e6ec5ec.env.PORT === undefined ? "8000" : process.env.PORT,
SESSION_NAME: process.env.PORT === undefined ? "asitha" : process.env.SESSION_NAME,
};
