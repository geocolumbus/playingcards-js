"use strict"

const Util = require("./cardutils.js")

exports.new = function () {

    const scores = {
        high_card: {name: "High Card", rank: 0},
        one_pair: {name: "One Pair", rank: 1},
        two_pair: {name: "Two Pair", rank: 2},
        three_of_a_kind: {name: "Three of a Kind", rank: 3},
        straight: {name: "Straight", rank: 4},
        flush: {name: "Flush", rank: 5},
        full_house: {name: "Full House", rank: 6},
        four_of_a_kind: {name: "Four of a Kind", rank: 7}
    }

    const _isHighCard = function () {
        return scores.high_card
    }

    const _isOnePair = function (cards) {
        for (let i = 0; i < 4; i++) {
            if (Util.eq(cards, i, i + 1)) {
                return scores.one_pair
            }
        }
    }

    const _isTwoPair = function (cards) {
        for (let i = 0; i < 3; i++) {
            if (Util.eq(cards, i, i + 1)) {
                for (let j = i + 2; j < 4; j++) {
                    if (Util.eq(cards, j, j + 1)) {
                        return scores.two_pair
                    }
                }
            }
        }
    }

    const _isThreeOfAKind = function (cards) {
        for (let i = 0; i < 3; i++) {
            if (Util.eq3(cards, i, i + 1, i + 2)) {
                return scores.three_of_a_kind
            }
        }
    }

    const _isStraight = function (cards) {
        let inOrder = true
        for (let i = 4; i > 0; i--) {
            if (i === 4 && cards[i].valueIndex === 0 && cards[i - 1].valueIndex === 10) {
                continue
            }
            if (cards[i].valueIndex !== cards[i - 1].valueIndex - 1) {
                inOrder = false
            }
        }
        return inOrder ? scores.straight : false
    }

    const _isFlush = function (cards) {

        for (let i = 1; i < 5; i++) {
            if (!Util.sameSuite(cards, 0, i)) {
                return
            }
        }
        return scores.flush
    }

    const _isFullHouse = function (cards) {

        return (Util.eq3(cards, 0, 1, 2) && Util.eq(cards, 3, 4))
        || (Util.eq(cards, 0, 1) && Util.eq3(cards, 2, 3, 4))
            ? scores.full_house : false
    }

    const _isFourOfAKind = function (cards) {

        return Util.eq4(cards, 0, 1, 2, 3)
        || Util.eq4(cards, 1, 2, 3, 4)
            ? scores.four_of_a_kind : false
    }

    return {
        getScore: function (hand) {
            return _isFourOfAKind(hand.cards)
                || _isFullHouse(hand.cards)
                || _isFlush(hand.cards)
                || _isStraight(hand.cards)
                || _isThreeOfAKind(hand.cards)
                || _isTwoPair(hand.cards)
                || _isOnePair(hand.cards)
                || _isHighCard(hand.cards)
        }
    }
}
