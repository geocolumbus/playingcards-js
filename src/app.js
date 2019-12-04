const Deck = require("./deck.js")
const Hand = require("./hand.js")
const Identify = require("./identify.js")

const identify = Identify.new()

function deal(deck) {
    let hands = []
    for (let j = 0; j < 10; j++) {
        const hand = Hand.new()
        for (let i = 0; i < 5; i++) {
            hand.add(deck.deal())
        }
        hands.push(hand)
    }
    return hands
}

let done = false
let count = 0
let results = {}
while (!done) {
    const deck = Deck.new()
    const hands = deal(deck.shuffle())

    hands.forEach(hand => {
        if (count++ > 1000) {
            done = true
        } else {
            const name = identify.getScore(hand).name
            if (results.hasOwnProperty(name)) {
                results[name]++
            } else {
                results[name] = 0
            }
        }
    })
}

console.log(JSON.stringify(results, null, 4))
