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
let count=0;
while (!done) {
    const deck = Deck.new()
    const hands = deal(deck.shuffle())

    hands.forEach(hand => {
        count++
        if (identify.getScore(hand).name === "Two Pair") {
            done = true
            console.log(count, hand.toString(), identify.getScore(hand).name)
        }
    })
}
