"use strict"

exports.new = function () {
    return {
        cards: [],

        add: function (card) {
            this.cards.push(card)
            this.order()
        },

        order: function () {
            this.cards.sort((a, b) => {
                if (b.valueIndex===0) return 1
                if (a.valueIndex===0) return -1
                if (a.valueIndex < b.valueIndex) return 1
                if (a.valueIndex > b.valueIndex) return -1
                return 0
            })
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
            for (let i = 0; i < this.cards.length; i++) {
                res += valueText[this.cards[i].valueIndex] + suiteText[this.cards[i].suiteIndex] + " "
            }
            return res.trimEnd()
        }
    }
}
