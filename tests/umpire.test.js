const Umpire = require('../src/modules/Umpire')

test('Umpire initializes score to zero', () => {
    const umpire = new Umpire()
    expect(umpire.score).toBe(0)
})
