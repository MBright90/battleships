const Player = require('../src/modules/Player')

test('Returns correct image path for given ship', () => {
    const player = new Player()
    expect(player.getImagePath('carrier')).toBe('./assets/images/carrier.png')
})

test('Adds set of positions to given ship object', () => {
    const player = new Player()
    player.addShipPosition(['cell1', 'cell2', 'cell3', 'cell4', 'cell5'], 'carrier')
    expect(player.ships.carrier.position).toStrictEqual(['cell1', 'cell2', 'cell3', 'cell4', 'cell5'])
})

////////////////////////////
// Testing findTargetShip //
////////////////////////////

test('Returns the positional array of a ship which has been hit', () => {
    const player = new Player()
    player.ships.carrier.position = ['ca1', 'ca2', 'ca3', 'ca4', 'ca5']

    expect(player.findTargetShip('ca2')).toBe('carrier')
})

/////////////////////////////
// Testing checkShipStatus //
/////////////////////////////

test('Returns false when all positions are not included in taken moves', () => {
    const player = new Player()
    player.ships.battleship.position = ['ba1', 'ba2', 'ba3', 'ba4']

    expect(player.checkShipStatus('battleship', ['ca3', 'ba2', 'ee5']).toBe(false))
})

test('Returns the initial cell when all positions are included in taken moves', () => {
    const player = new Player()
    player.ships.cruiser.position = ['cr1', 'cr2', 'cr3']

    expect (player.checkShipStatus('cruiser', ['cr1', 'ba4', 'cr3', 'ca2', 'cr2', 'lp0'])).toBe('cr1')
})

//////////////////////////////
// Testing allShipPositions //
//////////////////////////////

test('Returns each position of ships', () => {
    const player = new Player()
    player.ships = {
        carrier: {
            position: ['ca1', 'ca2', 'ca3', 'ca4', 'ca5'],
        },
        battleship: {
            position: ['ba1', 'ba2', 'ba3', 'ba4'],
        },
        submarine: {
            position: ['su1', 'su2', 'su3'],
        },
        cruiser: {
            position: ['cr1', 'cr2', 'cr3'],
        },
        destroyer: {
            position: ['de1', 'de2'],
        },
    }

    expect(player.allShipPositions()).toStrictEqual([
        'ca1', 'ca2', 'ca3', 'ca4', 'ca5', 
        'ba1', 'ba2', 'ba3', 'ba4', 
        'su1', 'su2', 'su3', 
        'cr1', 'cr2', 'cr3', 
        'de1', 'de2',
    ])
})

test('Excludes ships with no position yet set', () => {
    const player = new Player()
    player.ships = {
        carrier: {
            position: [],
        },
        battleship: {
            position: ['ba1', 'ba2', 'ba3', 'ba4'],
        },
        submarine: {
            position: ['su1', 'su2', 'su3'],
        },
        cruiser: {
            position: ['cr1', 'cr2', 'cr3'],
        },
        destroyer: {
            position: ['de1', 'de2'],
        },
    }

    expect(player.allShipPositions()).toStrictEqual([
        'ba1', 'ba2', 'ba3', 'ba4', 
        'su1', 'su2', 'su3', 
        'cr1', 'cr2', 'cr3', 
        'de1', 'de2',
    ])
})