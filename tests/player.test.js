const Player = require('../src/modules/Player')

test('Returns correct image path for given ship', () => {
    const player = new Player()
    expect(player.getImagePath('carrier')).toBe('./assets/images/carrier.jpg')
})
