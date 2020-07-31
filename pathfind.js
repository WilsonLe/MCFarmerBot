const pathfinder = require('mineflayer-pathfinder').pathfinder
const Movements = require('./lib/mineflayer-pathfinder/lib/movements')
const { GoalNear } = require('./lib/mineflayer-pathfinder/lib/goals')
exports.find = function(bot) {
    bot.loadPlugin(pathfinder)
    const mcData = require('minecraft-data')(bot.version)
    const defaultMove = new Movements(bot, mcData)
    bot.on('chat', function (username, message) {

        if (username === bot.username) return

        const target = bot.players[username] ? bot.players[username].entity : null
        if (message === 'come') {
            if (!target) {
                bot.chat('I don\'t see you !')
                return
            }
            const p = target.position

            bot.pathfinder.setMovements(defaultMove)
            bot.pathfinder.setGoal(new GoalNear(p.x, p.y, p.z, 1))
        }
    })
}
