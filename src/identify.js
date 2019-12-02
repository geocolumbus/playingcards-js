"use strict"

exports.new = function () {

    const scores = {
        high_card: {name: "High Card", rank: 0, card: null},
        one_pair: {name: "One Pair", rank: 1, card: null},
        two_pair: {name: "Two Pair", rank: 2, card: null},
        three_of_a_kind: {name: "Three of a Kind", rank: 3, card: null},
    }

    const _isHighCard = function () {
        return true
    }

    const _getHighCard = function (cards) {
        return [cards[0]]
    }

    const _isOnePair = function (cards) {
        for (let i = 0; i < 5; i++) {
            for (let j = i + 1; j < 5; j++) {
                if (cards[i].valueIndex === cards[j].valueIndex) {
                    return true
                }
            }
        }
        return false
    }

    const _getOnePair = function (cards) {
        for (let i = 0; i < 5; i++) {
            for (let j = i + 1; j < 5; j++) {
                if (cards[i].valueIndex === cards[j].valueIndex) {
                    return [cards[i], cards[j]]
                }
            }
        }
        return []
    }

    const _isTwoPair = function (cards) {
        for (let i = 0; i < 5; i++) {
            for (let j = i + 1; j < 5; j++) {
                if (cards[i].valueIndex === cards[j].valueIndex) {
                    for (let k = j + 1; k < 5; k++) {
                        for (let l = k + 1; l < 5; l++) {
                            if (cards[k].valueIndex === cards[l].valueIndex) {
                                return true
                            }
                        }
                    }
                }
            }
        }
        return false
    }

    const _getTwoPair = function (cards) {
        let pairCards = []
        for (let i = 0; i < 5; i++) {
            for (let j = i + 1; j < 5; j++) {
                if (cards[i].valueIndex === cards[j].valueIndex) {
                    pairCards.push(cards[i])
                    pairCards.push(cards[j])
                    for (let k = j + 1; k < 5; k++) {
                        for (let l = k + 1; l < 5; l++) {
                            if (cards[k].valueIndex === cards[l].valueIndex) {
                                pairCards.push(cards[k])
                                pairCards.push(cards[l])
                                return pairCards
                            }
                        }
                    }
                }
            }
        }
        return []
    }


    const _isThreeOfAKind = function (cards) {
        for (let i = 0; i < 5; i++) {
            for (let j = i + 1; j < 5; j++) {
                for (let k = j + 1; k < 5; k++) {
                    if (cards[i].valueIndex === cards[j].valueIndex
                        && cards[i].valueIndex === cards[k].valueIndex) {
                        return true
                    }
                }
            }
        }
        return false
    }

    const _getThreeOfAKind = function (cards) {
        for (let i = 0; i < 5; i++) {
            for (let j = i + 1; j < 5; j++) {
                for (let k = j + 1; k < 5; k++) {
                    if (cards[i].valueIndex === cards[j].valueIndex
                        && cards[i].valueIndex === cards[k].valueIndex) {
                        return [cards[i], cards[j], cards[k]]
                    }
                }
            }
        }
        return []
    }

    return {
        getScore: function (hand) {

            let score

            if (_isThreeOfAKind(hand.cards)) {
                score = scores.three_of_a_kind
                score.card = _getThreeOfAKind(hand.cards)
                return score
            }

            if (_isTwoPair(hand.cards)) {
                score = scores.two_pair
                score.card = _getTwoPair(hand.cards)
                return score
            }

            if (_isOnePair(hand.cards)) {
                score = scores.one_pair
                score.card = _getOnePair(hand.cards)
                return score
            }

            if (_isHighCard(hand.cards)) {
                score = scores.high_card
                score.card = _getHighCard(hand.cards)
                return score
            }
        }
    }
}
