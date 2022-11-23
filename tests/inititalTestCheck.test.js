const Umpire = require('../src/appModules/umpire')

test('Umpire initializes score to zero', () => {
    const umpire = new Umpire()
    expect(umpire.score).toBe(0)
})
