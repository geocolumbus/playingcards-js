"use strict"

exports.new = function () {
    const deck = {
        deck: [],

        initialize: function () {
            for (let suiteIndex = 0; suiteIndex < 4; suiteIndex++) {
                for (let valueIndex = 0; valueIndex < 13; valueIndex++) {
                    this.deck.push({valueIndex: valueIndex, suiteIndex: suiteIndex})
                }
            }
            return this
        },

        toString: function () {
            let res = ""
            const suiteText = {
                0: "♠",
                1: "♣",
                2: "♥",
                3: "♦"
            }
            const valueText = {
                0: "A",
                1: "2",
                2: "3",
                3: "4",
                4: "5",
                5: "6",
                6: "7",
                7: "8",
                8: "9",
                9: "10",
                10: "J",
                11: "Q",
                12: "K"
            }
            for (let i = 0; i < this.deck.length; i++) {
                res += valueText[this.deck[i].valueIndex] + suiteText[this.deck[i].suiteIndex] + " "
            }
            return res.trimEnd()
        },

        shuffle: function () {
            for (let i = 0; i < 1000; i++) {
                const a = Math.floor(Math.random() * 52)
                let b = a
                while (b === a) {
                    b = Math.floor(Math.random() * 52)
                }
                const temp = this.deck[a]
                this.deck[a] = this.deck[b]
                this.deck[b] = temp
            }
            return this
        },

        deal: function () {
            return this.deck.pop()
        }
    }

    return deck.initialize()
}


