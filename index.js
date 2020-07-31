const mineflayer = require('mineflayer')
const init = require('./data.json')
const workZone = require('./workZone.json')
const pathfind = require('./pathfind.js')
const findCrops = require('./findCrops.js')
const harvest = require('./harvest.js')
const bot = mineflayer.createBot({
    host: init.host,
    port: init.port,
    username: init.username,
    password: init.password,
    version: init.version
})

bot.once('spawn', loop)

function loop() {
    try {
        const wheat = findCrops.find(bot);
        pathfind.find(bot, wheat)
        harvest.dig(bot, wheat)
        harvest.plant(bot, wheat)
    } catch (e) {
        console.log(e);
    }
    // None blocks to harvest or sow. Postpone next loop a bit
    setTimeout(loop, 1000)
}