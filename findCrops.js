exports.find = function (bot) {
    const mcData = require('minecraft-data')(bot.version)
    return bot.findBlock({
        point: bot.entity.position,
        matching: (block) => {
            return block && block.type === mcData.blocksByName.wheat.id && block.metadata === 7
        }
    })
}