exports.dig = function (bot, wheat) {
    if (wheat != null) {
        console.log('diggin!');
        bot.dig(wheat, () => {
            setImmediate(() => { })
        })
        console.log('dug!');
    } else {
        return
    }
}

exports.plant = function (bot, wheat) {
    const mcData = require('minecraft-data')(bot.version)
    const Vec3 = require('vec3')
    bot.equip(mcData.itemsByName.wheat_seeds.id, 'hand', () => {
        bot.placeBlock(wheat, new Vec3(0, 1, 0), () => {
            setImmediate(() => { })
        })
        console.log('planted!');
        setImmediate(() => { })
    })
}

