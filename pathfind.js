const pathfinder = require('mineflayer-pathfinder').pathfinder
const Movements = require('./lib/mineflayer-pathfinder/lib/movements')
const { GoalNear } = require('./lib/mineflayer-pathfinder/lib/goals')
exports.find = function(bot,target,callback) {
    bot.loadPlugin(pathfinder)
    const mcData = require('minecraft-data')(bot.version)
    const defaultMove = new Movements(bot, mcData)
    if (target!=null){
        console.log('found wheat level '+ target.metadata + ' at '+ target.position.x + ' ' + target.position.y + ' ' + target.position.z);
        bot.pathfinder.setMovements(defaultMove)
        bot.pathfinder.setGoal(new GoalNear(target.position.x, target.position.y, target.position.z, 0))

    }else{
        console.log('no wheat to be found');
        return
    }
}
