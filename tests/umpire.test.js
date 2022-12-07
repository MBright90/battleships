const Umpire = require('../src/modules/Umpire')

test('Umpire initializes score to zero', () => {
    const umpire = new Umpire()
    expect(umpire.score).toBe(0)
})

test('Umpire changes opponent from default when selected', () => {
    const umpire = new Umpire()
    umpire.setOpponent('player')
    expect(umpire.opponent).toBe('player')
})
