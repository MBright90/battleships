const Umpire = require('../src/modules/umpire')

test('Umpire initializes score to zero', () => {
    const umpire = new Umpire()
    expect(umpire.score).toBe(0)
})

test('Umpire defaults to ai opponent when passed no value', () => {
    const umpire = new Umpire()
    expect(umpire.opponent).toBe('ai')
})

test('Umpire changes opponent from default when selected', () => {
    const umpire = new Umpire()
    umpire.setOpponent('player')
    expect(umpire.opponent).toBe('player')
})